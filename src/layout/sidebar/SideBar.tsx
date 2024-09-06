
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Accordion, AccordionSummary, Box, Button, Collapse, Typography, useMediaQuery, useTheme } from '@mui/material';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/styles';

import { SearchComponent, StoryComponent } from 'layout/nav/Header';

const Custombtn = styled(Button)(() => ({
  width: 70,
  height: 20,
  marginTop: 4,
  background: '#2e7bff',
  fontsize: 9,
  fontWeight: 600,
  color: '#fff',
  transition: '.5s',
  fontSize: 14
}));

const Custombtn_fanPage = styled('button')(() => ({
  margin: '5px 0 0 46px',
  padding: '6px 10px',
  backgroundColor: '#eef0f3',
  fontSize: 9,
  fontWeight: 600,
  lineHeight: 9.45,
  color: '#000',
  transition: '.5s',
  border: 'none',
  borderRadius: 5,
}));

const Wrapper = styled('div')({
  minHeight: 0,
  height: 'auto',
  transitionDuration: '268ms',
});

const WrapperInner = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const PolicyLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
});

const PolicyItem = styled('div')({
  padding: '8px 16px',
});

const GovernmentLink = styled(Link)({
  display: 'inline-block',
  overflow: 'hidden',
  width: 'initial',
  height: 'initial',
  background: 'none',
  opacity: 1,
  border: 0,
  margin: 0,
  padding: 0,
});

const GovernmentImage = styled('img')({
  display: 'block',
  maxWidth: '100%',
  width: 'initial',
  height: 'initial',
  background: 'none',
  opacity: 1,
  border: 0,
  margin: 0,
  padding: 0,
});


const SideBar: React.FC= () => {

  const theme = useTheme();
  const breackpoin = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className='side-panel'>
      <div className='logo'>
        <Image src={'/svg/logo.svg'} width={361} height={56} alt='logo' />
      </div>
      { breackpoin ? (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{width: '60%'}}>
              <SearchComponent/>
            </div>
            <div className='story_mobile'>
              <StoryComponent/>
            </div>
        </div>
      ) : '' }
      <div className='side-panel-scroll'>
        <Link href={`/`}>
          <a style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
            <div className='nav-item first'>
              <div>
                <span>
                  <Image src={'/svg/home.svg'} width={18} height={18} alt='logo' />
                </span>
              </div>
              Trang chủ
            </div>
          </a>
        </Link>
        <Link href={'/'}>
          <a style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
            <div className='nav-item first'>
              <div>
                <span>
                  <Image src={'/svg/course-2025.svg'} width={18} height={18} alt='logo' />
                </span>
              </div>
              Combo luyện thi 2025
            </div>
          </a>
        </Link>
        <Link href={'/'}>
          <a style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
            <div className='nav-item first'>
              <div>
                <span>
                  <Image src={'/svg/course-2025.svg'} width={18} height={18} alt='logo' />
                </span>
              </div>
              Bứt phá điểm thi vào 10 2025
            </div>
          </a>
        </Link>
        <Link href={'/'}>
          <a style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
            <div className='nav-item first'>
              <div>
                <span>
                  <Image src={'/svg/course-2026.svg'} width={18} height={18} alt='logo' />
                </span>
              </div>
              Combo luyện thi 2026
            </div>
          </a>
        </Link>
        <Link href={'/'}>
          <a style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
            <div className='nav-item first'>
              <div>
                <span>
                  <Image src={'/svg/toeic-course.svg'} width={18} height={18} alt='logo' />
                </span>
              </div>
              Luyện thi TOEIC 2 kỹ năng
            </div>
          </a>
        </Link>
        <Link href={'/'}>
          <a style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
            <div className='nav-item first'>
              <div>
                <span>
                  <Image src={'/svg/home.svg'} width={18} height={18} alt='logo' />
                </span>
              </div>
              Luyện thi TOEIC 4 kỹ năng
            </div>
          </a>
        </Link>
        <Link href={'/'}>
          <a style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
            <div className='nav-item first'>
              <div>
                <span>
                  <Image src={'/svg/home.svg'} width={18} height={18} alt='logo' />
                </span>
              </div>
              Tiếng Anh cơ bản
            </div>
          </a>
        </Link>
        <Link href={'/'}>
          <a style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
            <div className='nav-item first'>
              <div>
                <span>
                  <Image src={'/svg/home.svg'} width={18} height={18} alt='logo' />
                </span>
              </div>
              Lịch học và live
            </div>
          </a>
        </Link>
        <Link href={'/'}>
          <a style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
            <div className='nav-item first'>
              <div>
                <span>
                  <Image src={'/svg/home.svg'} width={18} height={18} alt='logo' />
                </span>
              </div>
              Sách
            </div>
          </a>
        </Link>
        <Link href={'/'}>
          <a style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
            <div className='nav-item first'>
              <div>
                <span>
                  <Image src={'/svg/home.svg'} width={18} height={18} alt='logo' />
                </span>
              </div>
              Vinh danh
            </div>
          </a>
        </Link>
        <Link href={'/'}>
          <a style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
            <div className='nav-item first'>
              <div>
                <Image src={'/svg/home.svg'} width={18} height={18} alt='logo' />
              </div>
              Giới thiệu
            </div>
          </a>
        </Link>
        <div className='side-panel-item'>
          <div className='about-top'>
            <div style={{ maxHeight: 40 }}>
              <Image src={'/img/about1.png'} width={40} height={40} />
            </div>
            <div className='about-teacher'>
              <p>
                Cô Vũ Thị Mai Phương
                <Image src={'/svg/tick.svg'} width={14} height={14} />
              </p>
              <Link href={'https://www.facebook.com/covuthimaiphuong/'}>
                <a style={{ textDecoration: 'none' }} target='_blank'>
                  <Custombtn variant="contained">
                    <Typography fontSize={8} fontWeight={700}>Theo dõi</Typography>
                  </Custombtn>
                </a>
              </Link>
            </div>
          </div>
          <div className='about-bottom'>
            <div className='english'>
              <span>
                <Image src={'/svg/ielts.svg'} width={43} height={12} />
              </span>
              <span>8.0</span>
            </div>
            <div className='english' style={{ marginLeft: 10 }}>
              <span>
                <Image src={'/svg/toeic.svg'} width={43} height={12} />
              </span>
              <span>990/990</span>
            </div>
          </div>
          <div className='about-bottom about-more'>
            <div className='english'>
              <Typography>TOEIC WRITING  200/200</Typography>
            </div>
          </div>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div className='social-item'>
              <Image src={'/svg/hotline.svg'} width={42} height={42} />
            </div>
            <div className='social-item'>
              <Image src={'/svg/fb3.svg'} width={42} height={42} />
            </div>
            <div className='social-item'>
              <Image src={'/svg/tiktok2.svg'} width={42} height={42} />
            </div>
            <div className='social-item'>
              <Image src={'/svg/youtube.svg'} width={42} height={42} />
            </div>
          </Box>
          <Accordion
            sx={{
              border: 'none',
              boxShadow: 'none',
              borderTop: 'none',
              px: 0,
              '&:before': {
                backgroundColor: 'azure',
              }
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                color: '#000',
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              Cộng đồng
            </AccordionSummary>
            <AccordionDetails>
              <div className='community'>
                <div className='community-info'>
                  <div className='community-info' style={{ marginRight: 6 }}>
                    <Image src={'/svg/fanpage.svg'} width={40} height={40} />
                  </div>
                  <div className='community-text'>
                    <Typography>FANPAGE Học tiếng Anh cùng cô Vũ Thị Mai Phương</Typography>
                    <div className="more">
                      <span>1 triệu lượt thích</span>
                      <ul>
                        <li>1,6 triệu người theo dõi</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <Link href={'https://www.facebook.com/covuthimaiphuong/'}>
                  <a style={{ textDecoration: 'none' }} target='_blank'>
                    <Custombtn_fanPage >
                      <Typography fontSize={8} fontWeight={700} sx={{ display: 'flex', alignItems: 'normal', gap: 0.5 }}>
                        <span>
                          <Image src={'/svg/fb.svg'} width={12} height={12} style={{ paddingRight: 6 }} />
                        </span>
                        Follow Page
                      </Typography>
                    </Custombtn_fanPage>
                  </a>
                </Link>
              </div>
              <div className='community'>
                <div className='community-info'>
                  <div className='community-info' style={{ marginRight: 6 }}>
                    <Image src={'/svg/group-fb.svg'} width={40} height={40} />
                  </div>
                  <div className='community-text'>
                    <Typography>GROUP Tiếng Anh cô Vũ Thị Mai Phương</Typography>
                    <div className="more">
                      <span style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <span>
                          <Image src={'/svg/public.svg'} width={12} height={12} style={{ paddingRight: 6 }} />
                        </span>
                        Nhóm công khai
                      </span>
                      <ul>
                        <li>356K Thành viên</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <Link href={'https://www.facebook.com/covuthimaiphuong/'}>
                  <a style={{ textDecoration: 'none' }} target='_blank'>
                    <Custombtn_fanPage >
                      <Typography fontSize={8} fontWeight={700} sx={{ display: 'flex', alignItems: 'normal', gap: 0.5 }}>
                        <span>
                          <Image src={'/svg/fb.svg'} width={12} height={12} style={{ paddingRight: 6 }} />
                        </span>
                        Follow Page
                      </Typography>
                    </Custombtn_fanPage>
                  </a>
                </Link>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: 'none',
              boxShadow: 'none',
              px: 0,
              '&:before': {
                backgroundColor: 'azure',
              }
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                color: '#000',
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              Liên hệ
            </AccordionSummary>
            <AccordionDetails>
              <div className='contact-item-info'>
                <strong>
                  <span style={{ fontSize: 12, color: '#000' }}>
                    Công Ty TNHH Đầu Tư & Giải Pháp Giáo Dục <br /> ngoaingu24h.vn
                    <br />
                    MST: 0108433619 do Sở kế hoạch và đầu tư Thành phố Hà Nội cấp lần đầu ngày 14/09/2018
                  </span>
                </strong>
              </div>
              <div className='contact-item'>
                <span style={{ paddingRight: 6 }}>
                  <Image src={'/svg/location.svg'} width={20} height={20} />
                </span>
                <span>
                  - Trụ sở chính: Số nhà 04, Ngõ 26, Tổ 2, Đường Phan Đình Giót, Phường La Khê, Quận Hà Đông,Thành phố Hà Nội
                  <br />
                  - VP HCM: 19 Hồ Văn Huê, P9, Q. Phú Nhuận, HCM.
                </span>
              </div>
              <div className='contact-item'>
                <span style={{ paddingRight: 6 }}>
                  <Image src={'/svg/mail.svg'} width={13} height={13} />
                </span>
                <span>
                  hotrokythuat.ngoaingu24h@gmail.com
                </span>
              </div>
              <div className='contact-item'>
                <span style={{ paddingRight: 6 }}>
                  <Image src={'/svg/phone.svg'} width={13} height={13} />
                </span>
                <span>
                  0975133439
                </span>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: 'none',
              boxShadow: 'none',
              px: 0,
              '&:before': {
                backgroundColor: 'azure',
              }
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
              sx={{
                color: '#000',
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              Các chính sách
            </AccordionSummary>
            <AccordionDetails>
              <Collapse in={true}>
                <Wrapper>
                  <WrapperInner>
                    <PolicyLink href="/chinh-sach-chung" style={{padding: 0}}>
                      <PolicyItem className='policy first'>Chính sách chung</PolicyItem>
                    </PolicyLink>
                    <PolicyLink href="/chinh-sach-bao-mat-thong-tin">
                      <PolicyItem className='policy first'>Chính sách bảo mật thông tin</PolicyItem>
                    </PolicyLink>
                    <PolicyLink href="/huong-dan-mua-hang">
                      <PolicyItem className='policy first'>Hướng dẫn mua hàng</PolicyItem>
                    </PolicyLink>
                    <PolicyLink href="/huong-dan-kich-hoat-khoa-hoc">
                      <PolicyItem className='policy first'>Hướng dẫn kích hoạt khoá học</PolicyItem>
                    </PolicyLink>
                    <PolicyLink href="/chinh-sach-hoan-tra-hoc-phi">
                      <PolicyItem className='policy first'>Chính sách hoàn trả học phí</PolicyItem>
                    </PolicyLink>
                    <GovernmentLink href="http://online.gov.vn/Home/WebDetails/68384" target="_blank">
                      <Image
                        width={130}
                        height={49}
                        src="/svg/gov.svg"
                        alt="Government Logo"
                      />
                    </GovernmentLink>
                  </WrapperInner>
                </Wrapper>
              </Collapse>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default SideBar