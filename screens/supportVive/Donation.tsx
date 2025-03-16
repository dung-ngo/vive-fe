import Wave from '@/components/svgAsComponents/Wave';
import EventCard from '@/screens/about/components/EventCard';
import SectionTitle from '@/components/SectionTitle';
import ChampaignItem from '@/screens/about/components/ChampaignItem';
import { TextWithBanner, TextWithNoBanner } from '@/components/Typography';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Arrow from '@/assets/svgs/arrow-right.svg';
import { GetDonationQuery } from '@/lib/gql/graphql';
import CircleImage from '@/components/CircleImage';

const contentUrls = {
  the7DaysChallenge: 'http://www.vive.org.vn/thu-thach-thuan-chay',
  veganFestivals: 'http://www.vegfestvietnam.vn/',
  uncovered: 'http://www.uncovered.film/',
  vivePodcast: 'https://www.youtube.com/@viveorgvn/podcasts',
  ngayXanh: 'https://www.youtube.com/@viveorgvn/podcasts',
  biKipThuanChay: 'https://linktr.ee/bikipthuanchay',
};

const customDescription = {
  en: `Our Impact<br />
    <br /><a href="${contentUrls.the7DaysChallenge}" target="_blank" rel="noopener noreferrer">The 7 Day Vegan Challenge</a> has inspired over <b>60\,000</b> people to try a plant-based diet. 
    <br />We\'ve helped <b>hundreds of restaurants</b> add vegan options to their menus.<br />
    <br />Our three <a href="${contentUrls.veganFestivals}" target="_blank" rel="noopener noreferrer">vegan festivals</a> have attracted over <b>30\,000 attendees</b> and gained the attention of local and international news.<br />
    <br />Our social media reach has grown to over <b>300\,000 followers</b>, influencing millions annually with vegan, plant-based and animal welfare related news.<br />
    <br />We are proud to have produced Vietnam's first documentary advocating for a kinder food system, <a href="${contentUrls.uncovered}" target="_blank" rel="noopener noreferrer">www.uncovered.film</a><br />
    <br />Vive has organised over 20 community events for more than <b>2\,000 people</b>, and spoken at universities nationwide about food sustainability and animal welfare issues.<br />
    <br />Our initiatives include <a href="${contentUrls.vivePodcast}" target="_blank" rel="noopener noreferrer">The Vive Podcast</a> with Scott Green and <a href="${contentUrls.ngayXanh} target="_blank" rel="noopener noreferrer">Ngày Xanh</a> with Lê Bui, helping to amplify the voices of change makers and community leaders. So far we have achieved over <b>30\,000 views</b>.<br />
    <br />In 2024 we launched \“<a href="${contentUrls.biKipThuanChay}" target="_blank" rel="noopener noreferrer">Bí Kíp Thuần Chay</a>,\” a comprehensive resource for vegan related info.<br />
    <br />We have also represented our cause at numerous international events in <b>Thailand\, Vietnam\, The Czech Republic, Singapore, Malaysia and The US</b> and given talks about animal welfare & alt-protein related topics in <b>SE Asia</b>.
    <br />Join us in making a difference by supporting our <b>mission for a compassionate world.</b>`,
  vi: `Tác động của chúng tôi<br />
    <br /><a href="${contentUrls.the7DaysChallenge}" target="_blank" rel="noopener noreferrer">Thử thách 7 ngày thuần chay</a> đã truyền cảm hứng cho hơn <b>60.000</b> người cùng thử chế độ ăn thuần thực vật.<br />
    <br />Chúng tôi đã giúp <b>hàng trăm nhà hàng</b> thêm món chay vào thực đơn.<br />
    <br />Ba <a href="${contentUrls.veganFestivals}" target="_blank" rel="noopener noreferrer">Ngày hội thuần chay</a> chúng tôi tổ chức thu hút hơn <b>30.000 người tham gia</b> và thu hút sự chú ý từ các kênh tin tức trong và ngoài nước.<br />
    <br />Các kênh truyền thông có hơn <b>300.000 người theo dõi</b>, mỗi năm đều tác động tới <b>hàng triệu người</b> với những tin tức về thuần chay, thuần thực vật và phúc lợi động vật. <br />
    <br />Chúng tôi tự hào là người tiên phong sản xuất bộ phim tài liệu đầu tiên ở Việt Nam vì một hệ thống thực phẩm nhân đạo hơn, <a href="${contentUrls.uncovered}" target="_blank" rel="noopener noreferrer">www.uncovered.film</a><br />
    <br />Vive đã tổ chức hơn <b>20 sự kiện</b> cộng đồng cho hơn <b>2.000 người</b>, đồng thời diễn thuyết tại các trường đại học trên cả nước về tính bền vững của thực phẩm và phúc lợi động vật. <br />
    <br />Các sáng kiến của chúng tôi bao gồm <a href="${contentUrls.vivePodcast}" target="_blank" rel="noopener noreferrer">The Vive Podcast</a> với anh Scott Green và <a href="${contentUrls.ngayXanh}" target="_blank" rel="noopener noreferrer">Ngày Xanh</a> với host Lê Bui, giúp lan tỏa tiếng nói của những người đang tạo ra thay đổi và các lãnh đạo cộng đồng. Hiện này chúng tôi đã có hơn <b>30.000 lượt xem</b>.<br />
    <br />Vào năm 2024 chúng tôi cho ra mắt “<a href="${contentUrls.biKipThuanChay}" target="_blank" rel="noopener noreferrer">Bí Kíp Thuần Chay</a>,” một nguồn thông tin đầy đủ, dễ hiểu về lối sống thuần thực vật.<br />
    <br />Chúng tôi cũng giới thiệu sứ mệnh của mình tại các sự kiện quốc tế tại <b>Thái Lan, Việt Nam, Cộng hòa Czech, Singapore, Malaysia và Mỹ</b>, đồng thời phát biểu về chủ đề phúc lợi động vật và đạm thay thế tại <b>Đông Nam Á</b>.<br />
    <br />Đóng góp để cùng chúng tôi tạo nên thay đổi <b>vì một thế giới xanh và nhận đạo hơn.</b>`,
};

const DonationScreen = ({ donation }: { donation: GetDonationQuery }) => {
  const { locale } = useRouter();
  console.log('language ', locale);
  const attributes = donation.donation?.data?.attributes;
  if (!attributes) {
    return 'No data';
  }
  return (
    <div className="vive-donation-screen">
      {attributes.sectionAboutUs && (
        <section className="about-us">
          <div className="container">
            <div className="donation-container">
              <div className="about-us-content">
                <article>
                  <a href="" target="_blank"></a>
                  <TextWithBanner
                    text={attributes.sectionAboutUs.title.split('|')[0] || ''}
                  />
                  <div className="tab-left">
                    <TextWithNoBanner
                      text={attributes.sectionAboutUs.title.split('|')[1] || ''}
                    />
                    <p
                      className="text-body"
                      dangerouslySetInnerHTML={{
                        __html:
                          locale === 'en'
                            ? customDescription.en
                            : customDescription.vi,
                      }}
                    >
                      {/* {attributes.sectionAboutUs.description} */}
                    </p>
                  </div>
                </article>
              </div>
              <div className="donation-content">
                <div
                  className="donation-iframe-box"
                  style={{
                    height: '700px',
                    maxHeight: '1000px',
                    overflow: 'auto',
                  }}
                >
                  <script
                    async
                    src="https://donorbox.org/widget.js"
                    // paypalExpress={true}
                    // onLoad={() => {}}
                  ></script>
                  <iframe
                    src="https://donorbox.org/embed/support-vive-tv?language=en"
                    name="donorbox"
                    // allowpaymentrequest="allowpaymentrequest"
                    seamless={true}
                    frameBorder="0"
                    scrolling="no"
                    width="100%"
                    style={{
                      maxWidth: '400px',
                      minWidth: '250px',
                      width: '100%',
                      height: '100%',
                      maxHeight: 'none!important',
                    }}
                    allow="payment"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default DonationScreen;
