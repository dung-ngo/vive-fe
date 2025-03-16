import { useEffect, useRef, useState } from 'react';
import SearchSuggestCard from './SearchSuggestCard';
import { ClickAwayListener, debounce } from '@mui/material';
import client from '@/lib/apolloClient';
import {
  GetSearchPostsDocument,
  GetSearchPostsQuery,
  GetSearchPostsQueryVariables,
  SearchPostFragment,
} from '@/lib/gql/graphql';
import { useRouter } from 'next/router';
import useTranslations from '@/hooks/useTranslations';

const Search = () => {
  const t = useTranslations();
  const inputRef = useRef<HTMLInputElement>(null);
  const [listPosts, setListPosts] = useState<SearchPostFragment[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const onChangeSearchKey = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatchSearchByKeyDebounce(e.target.value);
  };
  const { locale } = useRouter();
  const dispatchSearchByKeyDebounce = useRef(
    debounce(async (searchKeyParam: string) => {
      let { data, errors } = await client.query<
        GetSearchPostsQuery,
        GetSearchPostsQueryVariables
      >({
        query: GetSearchPostsDocument,
        variables: {
          locale,
          word: searchKeyParam,
          limit: 10,
        },
      });
      const list = data.posts?.data.map((item) => item.attributes);
      setListPosts(list as SearchPostFragment[]);
    }, 500),
  ).current;
  const searchPost = async () => {
    let { data, errors } = await client.query<
      GetSearchPostsQuery,
      GetSearchPostsQueryVariables
    >({
      query: GetSearchPostsDocument,
      variables: {
        locale,
        word: '',
        limit: 10,
      },
    });
    const list = data.posts?.data.map((item) => item.attributes);
    setListPosts(list as SearchPostFragment[]);
  };
  useEffect(() => {
    searchPost();
  }, []);
  return (
    <ClickAwayListener onClickAway={() => setShowDropdown(false)}>
      <div className="vive-search">
        <input
          ref={inputRef}
          onClick={() => setShowDropdown(true)}
          placeholder={`${t.timKiem}...`}
          className="search-input text-body-small"
          onChange={(e) => onChangeSearchKey(e)}
        />
        <div
          className="dropdown search-dropdown"
          style={{ display: showDropdown ? 'block' : 'none' }}
        >
          <div className="scrollable">
            <div className="text-body-small">{t.header.tinTuc}</div>
            <div>
              {listPosts.map((data, index) => (
                <SearchSuggestCard key={index} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default Search;
