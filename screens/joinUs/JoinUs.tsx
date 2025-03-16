import Wave from '@/components/svgAsComponents/Wave';
import IntroItem from './components/IntroItem';
import { TextWithBanner } from '@/components/Typography';
import Member from './components/Member';
import { GetDoiNguSongThuanChayQuery } from '@/lib/gql/graphql';

const JoinUsScreen = ({ doiNguSongThuanChay }: { doiNguSongThuanChay: GetDoiNguSongThuanChayQuery }) => {
  const attributes = doiNguSongThuanChay.doiNguSongThuanChay?.data?.attributes;
  if (!attributes) {
    return 'No data';
  }
  return (
    <div className="vive-joinUs-screen">
      <section className="joinUs-intro">
        <div className="container">
          <div className="intro-container">
            {[
              {
                title: attributes.titleJoinVive?.split('|')[0]?.trim() || '',
                title2: attributes.titleJoinVive?.split('|')[1]?.trim() || '',
                content: attributes.descriptionJoinVive || '',
              },
              {
                title: attributes.titleSupportVive?.split('|')[0]?.trim() || '',
                title2: attributes.titleSupportVive?.split('|')[1]?.trim() || '',
                content: attributes.descriptionSupportVive || '',
              },
            ].map((intro, index) => (
              <IntroItem key={index} data={intro} />
            ))}
          </div>
        </div>
      </section>
      <section className="joinUs-members">
        <Wave />
        <div className="container">
          <TextWithBanner text={attributes.titleTeamVive || ''} />
          <div className="member-list">
            {attributes.sectionListMembers &&
              attributes.sectionListMembers.map(
                (member, index) => member && <Member key={index} personInfo={member} />,
              )}
          </div>
        </div>
      </section>
    </div>
  );
};

const intros = [
  {
    title: 'Tham gia',
    title2: 'Vive',
    content:
      'Với quy mô ngày càng lớn của chương trình Thử Thách 7 Ngày Thuần Chay, chúng mình rất mong nhận được sự hỗ trợ của cộng đồng thuần chay để giúp nhiều người hiểu được tầm quan trọng và lợi ích của việc thuần chay. Chính vì vậy, nếu bạn đã ăn thuần chay hơn 6 tháng, và yêu thích các công việc cộng đồng, hãy tham gia ngay đội ngũ tình nguyện viên ở đây.',
  },
  {
    title: 'Hỗ trợ',
    title2: 'Vive',
    content:
      'Nếu bạn muốn đóng góp thời gian, kinh nghiệm hoặc kỹ năng để giúp Vive ngày càng lớn mạnh và lan tỏa đến nhiều người hơn, hãy chia sẻ với chúng mình một ít thông tin về bạn ở đây nhé: (link to volunteer form)',
  },
];

const members = [
  {
    avatar: 'http://vive.org.vn/static/825cdaf8b96934f545ae402f2d45f680/171fd/bc1b4c00f01b7e6da5fe1e0a60f3cb93.webp',
    title: 'Founder',
    fullName: 'Scott Green',
    intro:
      'Scott đến Việt Nam từ năm 2011 và xem Sài Gòn là quê hương thứ hai kể từ đó. Được ảnh hưởng từ phong trào thuần chay từ Anh Quốc, quê nhà của mình, Scott mong muốn truyền cảm hứng một lối sống nhân đạo hơn và bền vững hơn đến với cộng đồng Việt Nam.',
  },
  {
    avatar: 'http://vive.org.vn/static/232bf722b10f30f8c9ec8c5d9690c347/171fd/2802e2488625128bc745e685034396ec.webp',
    title: 'Creative Director',
    fullName: 'Lê Bùi',
    intro:
      'Lê có xuất phát điểm là đạo diễn và nhà sáng tạo nội dung trong trong lĩnh vực quảng cáo và phim độc lập. Sau khi hợp tác với Vive dưới cương vị freelancer, lòng trắc ẩn của Lê dành cho động vật được gợi mở, khiến anh quyết định gắn bó và trở thành một Viver toàn thời gian.',
  },
  {
    avatar: 'http://vive.org.vn/static/cd14ab0ecd7035138e4cdb9a4ec163d0/171fd/feb10249a1a87dfa3fbb044d1fec18d3.webp',
    title: 'Campaign Manager',
    fullName: 'Lê Ngọc Chi',
    intro:
      'Bắt đầu tìm hiểu về lối sống thuần chay từ năm 2018, Chi hiểu rằng thuần chay là một trong những cách hiệu quả nhất để có thể bảo vệ được môi trường, động vật và cả sức khỏe. Với những kinh nghiệm và kiến thức tích lũy được từ ngành quảng cáo, công nghệ ở Việt Nam cũng như ở nước ngoài qua nhiều năm, Chi đã dành trọn thời gian và công sức của mình đóng góp cho các tổ chức phi chính phủ để đấu tranh cho quyền lợi của động vật và như phổ biến lối sống nhân đạo hơn, xanh hơn đến mọi người',
  },
  {
    avatar: 'http://vive.org.vn/static/7d5e785f6d389e97387a51bde17b0e98/171fd/b73c0c4f43d18e5b446ff99a907d76c3.webp',
    title: 'Social Media Manager',
    fullName: 'Vương Thu Trang',
    intro:
      'Gắn bó với động vật từ nhỏ, nên khi biết được sự thật về cách động vật bị đối xử trong ngành chăn nuôi và các tác hại của ngành này lên môi trường, cũng như sự thật về thực phẩm đối với sức khỏe, Trang biết mình phải thay đổi. Với khả năng ngoại ngữ và tra cứu tài liệu về khoa học, dinh dưỡng thuần chay, Trang mong muốn đem đến những kiến thức về dinh dưỡng chính thống cho nhiều người hơn, nâng cao ý thức cộng đồng về môi trường và lan tỏa một lối sống nhân ái.',
  },
];

export default JoinUsScreen;
