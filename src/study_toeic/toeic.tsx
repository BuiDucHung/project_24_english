import React, { useState } from 'react';
import styles from './style.module.css';
import { Box, Button, Collapse, Grid, Tab, Tabs, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import comboToeic from '../../mock_api/dataToeic.json'

const ToeicStudy: React.FC = () => {


  const theme = useTheme();
  const breackpoin_mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };


  return (
    <div className={styles.course}>
      <Typography variant='h2' className={styles.course_title}>
        LUYỆN THI TOEIC 4 KỸ NĂNG CHO SINH VIÊN & NGƯỜI ĐI LÀM
      </Typography>
      <Box sx={{ width: '100%', typography: 'body1', marginTop: 2 }}>
        <Tabs value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          scrollButtons="auto"
          variant="scrollable">

          <Tab sx={{ maxWidth: '100%' }} label={
            <React.Fragment>
              {breackpoin_mobile ? (
                <div className={`${styles.course_option__item} ${styles.mobile} ${Number(value) === 0 ? styles.mobile_active : ''}`}
                  onClick={() => setValue(0)}
                >
                  <Typography>TOEIC 2 KĨ NĂNG</Typography>
                  <div className={styles.combo_mobile}>
                    <div className={styles.buy_combo}>
                      <Typography>
                        <span style={{ marginRight: 4 }}>
                          <Image src="/svg/cart-combo.svg" width={12} height={10} alt="Combo" style={{ maxWidth: '100px' }} />
                        </span>
                        MUA
                      </Typography>
                      COMBO
                    </div>
                    <div className={styles.price}>
                      <Typography>4,250,000 VNĐ</Typography>
                      1,600,000 VNĐ
                    </div>
                  </div>
                </div>
              ) : (
                <div className={`${styles.combo} ${styles.tabs}`}>
                  <div className={`${styles.course_option__item} ${Number(value) === 0 ? styles.active : ''}`} onClick={() => setValue(0)}>
                    <p>TOEIC 2 KĨ NĂNG</p>
                    <Collapse in={Number(value) === 0} orientation="horizontal">
                      <div className={styles.combo}>
                        <div className={styles.buy_combo}>
                          <p>
                            <span>
                              <Image src="/svg/cart-combo.svg" width={12} height={10} alt="Combo" style={{ maxWidth: '100px' }} />
                            </span>
                            MUA
                          </p>
                          COMBO
                        </div>
                        <div className={styles.price}>
                          <p>4,250,000 VNĐ</p>
                          1,600,000 VNĐ
                        </div>
                      </div>
                    </Collapse>
                  </div>
                </div>
              )}
            </React.Fragment>
          } />

          <Tab sx={{ maxWidth: '100%' }} label={
            <React.Fragment>
              {breackpoin_mobile ? (
                <div className={`${styles.course_option__item} ${styles.mobile} ${Number(value) === 1 ? styles.mobile_active : ''}`}
                  onClick={() => setValue(1)}
                >
                  <Typography>COMBO LẤY GỐC TIẾNG ANH & ÔN THI TOEIC CẤP TỐC</Typography>
                  <div className={styles.combo_mobile}>
                    <div className={styles.buy_combo}>
                      <Typography>
                        <span style={{ marginRight: 4 }}>
                          <Image src="/svg/cart-combo.svg" width={12} height={10} alt="Combo" style={{ maxWidth: '100px' }} />
                        </span>
                        MUA
                      </Typography>
                      COMBO
                    </div>
                    <div className={styles.price}>
                      <Typography>4,250,000 VNĐ</Typography>
                      1,600,000 VNĐ
                    </div>
                  </div>
                </div>
              ) : (
                <div className={`${styles.combo} ${styles.tabs}`}>
                  <div className={`${styles.course_option__item} ${Number(value) === 1 ? styles.active : ''}`} onClick={() => setValue(1)}>
                    <p>COMBO LẤY GỐC TIẾNG ANH & ÔN THI TOEIC CẤP TỐC</p>
                    <Collapse in={Number(value) === 1} orientation="horizontal">
                      <div className={styles.combo}>
                        <div className={styles.buy_combo}>
                          <p>
                            <span>
                              <Image src="/svg/cart-combo.svg" width={12} height={10} alt="Combo" style={{ maxWidth: '100px' }} />
                            </span>
                            MUA
                          </p>
                          COMBO
                        </div>
                        <div className={styles.price}>
                          <p>4,250,000 VNĐ</p>
                          1,600,000 VNĐ
                        </div>
                      </div>
                    </Collapse>
                  </div>
                </div>
              )}
            </React.Fragment>
          } />

          <Tab sx={{ maxWidth: '100%' }} label={
            <React.Fragment>
              {breackpoin_mobile ? (
                <div className={`${styles.course_option__item} ${styles.mobile} ${Number(value) === 2 ? styles.mobile_active : ''}`}
                  onClick={() => setValue(2)}
                >
                  <Typography>TOEIC 4 KĨ NĂNG</Typography>
                  <div className={styles.combo_mobile}>
                    <div className={styles.buy_combo}>
                      <Typography>
                        <span style={{ marginRight: 4 }}>
                          <Image src="/svg/cart-combo.svg" width={12} height={10} alt="Combo" style={{ maxWidth: '100px' }} />
                        </span>
                        MUA
                      </Typography>
                      COMBO
                    </div>
                    <div className={styles.price}>
                      <Typography>5,900,000 VNĐ</Typography>
                      2,450,000 VNĐ
                    </div>
                  </div>
                </div>
              ) : (
                <div className={`${styles.combo} ${styles.tabs}`}>
                  <div className={`${styles.course_option__item} ${Number(value) === 2 ? styles.active : ''}`} onClick={() => setValue(2)}>
                    <p>TOEIC 4 KĨ NĂNG</p>
                    <Collapse in={Number(value) === 2} orientation="horizontal">
                      <div className={styles.combo}>
                        <div className={styles.buy_combo}>
                          <p>
                            <span>
                              <Image src="/svg/cart-combo.svg" width={12} height={10} alt="Combo" style={{ maxWidth: '100px' }} />
                            </span>
                            MUA
                          </p>
                          COMBO
                        </div>
                        <div className={styles.price}>
                          <p>5,900,000 VNĐ</p>
                          2,450,000 VNĐ
                        </div>
                      </div>
                    </Collapse>
                  </div>
                </div>
              )}
            </React.Fragment>
          } />
          </Tabs >
          <Box sx={{ p: 3 }}>
            {value === 0 && (
              <Box>
                <Grid container spacing={2} className={styles.gridContainer}>
                  {comboToeic.combo_toeic.map((item) => (
                    <Grid item xs={6} sm={4} md={4} xl={3} key={item.id}>
                      <div className={styles.course_item}>
                        <div className={styles.course_item__avatar}>
                          <span>
                            <Image src={item.banner} width={292} height={182} sizes='100vw' />
                          </span>
                          <div className={`${styles.hover_review__course}`}>
                            <div className={styles.flex}>
                              <Button sx={{
                                border: '2px solid #fff',
                                marginRight: 5,
                                color: '#fff',
                                ml: 0,
                                mr: 0
                              }}>
                                Xem nhanh
                                <span>
                                </span>
                              </Button>
                              <Button variant="text"
                                sx={{
                                  backgroundColor: '#ffb039',
                                  border: '2px solid #ffb039',
                                  marginLeft: 5,
                                  color: '#fff',
                                  ml: 0,
                                  mr: 0
                                }}
                              >
                                Mua Ngay
                                <span></span>
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className={styles.course_item__info}>
                          <div className={`${styles.course_item__title} ${styles.dot_2}`}>
                            {item.name}
                          </div>
                          <div className={styles.course_item__footer}>
                            <div className={styles.price}>{item.price}</div>
                          </div>
                        </div>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}
            {value === 1 && (
              <Box>
                <Typography variant="h6">PRO 3MPLUS - MỤC TIÊU 9+ (2025)</Typography>
              </Box>
            )}
            {value === 2 && (
              <Box>
                <Typography variant="h6">BỨT PHÁ ĐIỂM THI VÀO 10 (2025)</Typography>
              </Box>
            )}
          </Box>
      </Box>
    </div >
  )
}

export default ToeicStudy