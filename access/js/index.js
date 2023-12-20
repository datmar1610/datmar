const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const logo = $('.logo')
const download = $('.download')
const btnPlayPause = $('.playPause')
const btnPlay = $('.play')
const h = ":sptth"
const l = "87ituP"
const trungMusic = l + "/moc.koobecaf//" + h
const audio = $('.audio')
const reload = $('.reload')
const left = $('.left')
const right = $('.right')

const app = {
  songStart: 0,
  textData: {
    logo: "chimzdapoet",
    fb: "https://www.facebook.com/profile.php?id=100054877275364",
  },
  music: [
    {
      name: "Intro",
      singer: "Theme Song",
      img: "https://yt3.ggpht.com/ytc/AMLnZu9TQznC4W5fdZhH91ihb05BJVCOFziow1qIukte4w=s600-c-k-c0x00ffffff-no-rj-rp-mo",
      link: "./access/music/intro.mp3"
    },
    {
      name: "3107 - 1",
      singer: "W/n",
      img: "https://yt3.ggpht.com/ytc/AMLnZu9MnSXGszY9s8ru7UUHC5HCWmAZ3mjrivsDGrSw6g=s176-c-k-c0x00ffffff-no-rj",
      link: "./access/music/3107-1.mp3"
    }, 
    {
      name: '3107 - 2',
      singer: 'W/n',
      img: 'https://yt3.ggpht.com/ytc/AMLnZu9MnSXGszY9s8ru7UUHC5HCWmAZ3mjrivsDGrSw6g=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/3107-2.mp3'
    },
    {
      name: '3107 - 3',
      singer: 'W/n',
      img: 'https://yt3.ggpht.com/ytc/AMLnZu9MnSXGszY9s8ru7UUHC5HCWmAZ3mjrivsDGrSw6g=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/3107-3.mp3'
    },
    {
      name: '3107 - 4',
      singer: 'W/n',
      img: 'https://yt3.ggpht.com/ytc/AMLnZu9MnSXGszY9s8ru7UUHC5HCWmAZ3mjrivsDGrSw6g=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/3107-4.mp3'
    },
    {
      name: 'Như Những Phút Ban Đầu',
      singer: 'Hoài Lâm',
      img: 'https://yt3.ggpht.com/ytc/AMLnZu89lZeCXUTxxEK3TI10jWldh9My5Fc79fbohTnLdw=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/nhunhungphutbandau.mp3'
    },
    {
      name: '1 Phút',
      singer: 'Andiez',
      img: 'https://yt3.ggpht.com/lWQw0UFmEqUJF_K3fRCHdO_TOkC9MWqMmbPUP6annL_97dlVCVfPTL9kMhyHRjI_hePmbdhdzlU=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/1phut.mp3'
    },
    {
      name: 'Suýt Nữa Thì',
      singer: 'Andiez',
      img: 'https://yt3.ggpht.com/lWQw0UFmEqUJF_K3fRCHdO_TOkC9MWqMmbPUP6annL_97dlVCVfPTL9kMhyHRjI_hePmbdhdzlU=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/suytnuathi.mp3'
    },
    {
      name: 'Sai Người Sai Thời Điểm',
      singer: 'Thanh Hưng',
      img: 'https://yt3.ggpht.com/InMxflDeNriafa4Pf2GXbwlz-3v8W8kZvoCBEz094cIg7VjnOidyeCxZsc1P_KldSBSSBXnFrw=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/sainguoisaithoidiem.mp3'
    },
    {
      name: 'Đừng Như Thói Quen',
      singer: 'JAYKII & SARA',
      img: 'https://yt3.ggpht.com/ytc/AMLnZu-N88jXhp3rGUak8l3eLH4M1x9g7UHmNVOrKGrA=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/dungnhuthoiquen.mp3'
    },
    {
      name: 'Xin Đừng Lặng Im',
      singer: 'Soobin Hoàng Sơn',
      img: 'https://yt3.ggpht.com/ytc/AMLnZu9iJXDiUSZ9az5rgL2JOIGSfRpZmjHSGQia6Ks5hA=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/xindunglangim.mp3'
    },
    {
      name: 'Sao Em Nỡ',
      singer: 'Hiền Hồ ft.JAYKII',
      img: 'https://yt3.ggpht.com/HJaRj2po2fuUU4zOE5VVo1n9Csw_CtKfH3M0UmI_KPxYb2_-gfeTi8qaXxTgpH8006x0I7Bydg=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/saoeno.mp3'
    },
    {
      name: 'Trong Trí Nhớ Của Anh',
      singer: 'Nguyễn Trần Trung Quân',
      img: 'https://yt3.ggpht.com/ytc/AMLnZu8OQ-kgYPXR3rrMJiXjhpDWrsB5gnk4v0-Lzzq4=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/trongtrinhocuaanh.mp3'
    },
    {
      name: 'Đã Từng',
      singer: 'Bùi Anh Tuấn ft. Dương Hoàng Yến',
      img: 'https://yt3.ggpht.com/ytc/AMLnZu8N0FD_55h3-L7md7vXN30JJHGBcS9RCsPceu9kJw=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/datung.mp3'
    },
    {
      name: 'Ngày Em Trở Về',
      singer: 'Trịnh Đình Quang',
      img: 'https://yt3.ggpht.com/0lYvzNCeR16HfbmcRUxnEQ9fZ3RuvXh3PQwfa78dwUyp09Mi0fvOhHwgKm6RGWMhI5AjFMrrhg=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/ngayetrove.mp3'
    },
    {
      name: 'Em Biết',
      singer: 'Trịnh Đình Quang',
      img: 'https://yt3.ggpht.com/0lYvzNCeR16HfbmcRUxnEQ9fZ3RuvXh3PQwfa78dwUyp09Mi0fvOhHwgKm6RGWMhI5AjFMrrhg=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/embiet.mp3'
    },
    {
      name: 'Nếu Em Còn Tồn Tại',
      singer: 'Trịnh Đình Quang',
      img: 'https://yt3.ggpht.com/0lYvzNCeR16HfbmcRUxnEQ9fZ3RuvXh3PQwfa78dwUyp09Mi0fvOhHwgKm6RGWMhI5AjFMrrhg=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/neuecontontai.mp3'
    },
    {
      name: 'Mưa Trong Lòng',
      singer: 'Trịnh Đình Quang',
      img: 'https://yt3.ggpht.com/0lYvzNCeR16HfbmcRUxnEQ9fZ3RuvXh3PQwfa78dwUyp09Mi0fvOhHwgKm6RGWMhI5AjFMrrhg=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/muatronglong.mp3'
    },
    {
      name: 'Anh Đã Quen Với Cô Đơn',
      singer: 'Soobin Hoàng Sơn',
      img: 'https://yt3.ggpht.com/ytc/AMLnZu9iJXDiUSZ9az5rgL2JOIGSfRpZmjHSGQia6Ks5hA=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/anhdaquenvscodon.mp3'
    },
    {
      name: 'Xin Lỗi Vì Đã Yêu Nhau',
      singer: 'Hoài Lâm',
      img: 'https://yt3.ggpht.com/ytc/AMLnZu89lZeCXUTxxEK3TI10jWldh9My5Fc79fbohTnLdw=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/xinloividayeunhau.mp3'
    },
    {
      name: 'Rất Buồn',
      singer: 'Hoài Lâm',
      img: 'https://yt3.ggpht.com/ytc/AMLnZu89lZeCXUTxxEK3TI10jWldh9My5Fc79fbohTnLdw=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/ratbuon.mp3'
    },
    {
      name: 'Đừng Ai Nhắc Về Cô Ấy',
      singer: 'Phạm Anh Quân',
      img: 'https://yt3.ggpht.com/R3Kc1QLYHXEf21U115aAOyFFnqspEm1irOZwf1d-2iY_KcvDzzHtsU4Vr_Y-87ec0CI33eka4g=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/dungainhacvecoay.mp3'
    },
    {
      name: 'Anh Sẽ Ổn Thôi',
      singer: 'Vương Anh Tú',
      img: 'https://yt3.ggpht.com/546Y5MEBtB9mh1zV_BUvVZYXySXMOR-wurRKSkjA87T93N5RwPoLXx4Vf-2i5wUfcj0peH4L=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/anhseonthoi.mp3'
    },
    {
      name: 'Hết Thương Cạn Nhớ',
      singer: 'Đức Phúc',
      img: 'https://yt3.ggpht.com/oxV7sf7nKSxc20hwO0FNj7RLYmsJk4OkkmKGXyaLmm8T3wkcOb99m4QkhSQpuVGYvhos0SUHPg=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/hetthuongcannho.mp3'
    },
    {
      name: 'See Tình',
      singer: 'AMEE',
      img: 'https://yt3.ggpht.com/KPs-gcInVgiw5F-8B_YqEi1juQ0fvzkC87qidvFq1jc9I2Tqj-Lh7OL5-RR8a32Zd2mVoDtRkWY=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/seetinh.mp3'
    },
    {
      name: 'Bông Hoa Chẳng Thuộc Về Ta',
      singer: 'Việt',
      img: 'https://yt3.ggpht.com/IIAU1IvRiaMY1nQ_ZUrHcv16iUqdmhdc-tikDmq7TSASR4YwptevT_GD-vbm1Fcu_vdTOL2xlQ=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/bonghoachangthuocveta.mp3'
    },
    {
      name: 'Dù Cho Mai Về Sau',
      singer: 'Buitruonglinh',
      img: 'https://yt3.ggpht.com/ElKKgea2MUAJ0HaFbfmudUbKfQZuu5Nq72lVyHabW2Zz6bvUibABGDgwuEPWUUfGqf_QTxyZ=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/duchomaivesau.mp3'
    },
    {
      name: 'Đen Đá Không Đường',
      singer: 'AMEE',
      img: 'https://yt3.ggpht.com/KPs-gcInVgiw5F-8B_YqEi1juQ0fvzkC87qidvFq1jc9I2Tqj-Lh7OL5-RR8a32Zd2mVoDtRkWY=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/dendakhongduong.mp3'
    },
    {
      name: 'Chiều Hôm Ấy',
      singer: 'JayKii',
      img: 'https://yt3.ggpht.com/ulUX_2GJatgtUxiUWYzZxr4C4mIELE2ndrvDpWdFjZ51nYFuYzWVO1c7gE2E-1Mr9kL_SYHLdg=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/chieuhomay.mp3'
    },
    {
      name: 'Giúp Anh Trả Lời Những Câu Hỏi',
      singer: 'Vương Anh Tú',
      img: 'https://yt3.ggpht.com/546Y5MEBtB9mh1zV_BUvVZYXySXMOR-wurRKSkjA87T93N5RwPoLXx4Vf-2i5wUfcj0peH4L=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/GATLNCH.mp3'
    },
    {
      name: 'Bước Qua Nhau',
      singer: 'Vũ',
      img: 'https://yt3.ggpht.com/Ys7qlhPnVINsnAK_-D79-ljufzVhDWwtNvzdC7XpIYl4IBJoRgkTiVg1WFsuFJ2fqJQcObTCFw=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/buocquanhau.mp3'
    },
    {
      name: 'Lạ Lùng',
      singer: 'Vũ',
      img: 'https://yt3.ggpht.com/Ys7qlhPnVINsnAK_-D79-ljufzVhDWwtNvzdC7XpIYl4IBJoRgkTiVg1WFsuFJ2fqJQcObTCFw=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/lalung.mp3'
    },
    {
      name: 'Bước Qua Mùa Cô Đơn',
      singer: 'Vũ',
      img: 'https://yt3.ggpht.com/Ys7qlhPnVINsnAK_-D79-ljufzVhDWwtNvzdC7XpIYl4IBJoRgkTiVg1WFsuFJ2fqJQcObTCFw=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/buocquamuacodon.mp3'
    },
    {
      name: 'Đông Kiếm Em',
      singer: 'Vũ',
      img: 'https://yt3.ggpht.com/Ys7qlhPnVINsnAK_-D79-ljufzVhDWwtNvzdC7XpIYl4IBJoRgkTiVg1WFsuFJ2fqJQcObTCFw=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/dongkieme.mp3'
    },
    {
      name: 'Đợi',
      singer: 'Vũ',
      img: 'https://yt3.ggpht.com/Ys7qlhPnVINsnAK_-D79-ljufzVhDWwtNvzdC7XpIYl4IBJoRgkTiVg1WFsuFJ2fqJQcObTCFw=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/doi.mp3'
    },
    {
      name: 'Lời Yêu Em',
      singer: 'Vũ',
      img: 'https://yt3.ggpht.com/Ys7qlhPnVINsnAK_-D79-ljufzVhDWwtNvzdC7XpIYl4IBJoRgkTiVg1WFsuFJ2fqJQcObTCFw=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/loiyeuem.mp3'
    },
    {
      name: 'Mùa Hè Của Em',
      singer: 'Vũ',
      img: 'https://yt3.ggpht.com/Ys7qlhPnVINsnAK_-D79-ljufzVhDWwtNvzdC7XpIYl4IBJoRgkTiVg1WFsuFJ2fqJQcObTCFw=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/muahecuaem.mp3'
    },
    {
      name: 'Mùa Mưa Ngâu Nằm Cạnh',
      singer: 'Vũ',
      img: 'https://yt3.ggpht.com/Ys7qlhPnVINsnAK_-D79-ljufzVhDWwtNvzdC7XpIYl4IBJoRgkTiVg1WFsuFJ2fqJQcObTCFw=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/muamuangaunamcanh.mp3'
    },
    {
      name: 'Chuyện Những Người Yêu Xa',
      singer: 'Vũ',
      img: 'https://yt3.ggpht.com/Ys7qlhPnVINsnAK_-D79-ljufzVhDWwtNvzdC7XpIYl4IBJoRgkTiVg1WFsuFJ2fqJQcObTCFw=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/chuyennhungnguoiyeuxa.mp3'
    },
    {
      name: 'Hành Tinh Song Song',
      singer: 'Vũ',
      img: 'https://yt3.ggpht.com/Ys7qlhPnVINsnAK_-D79-ljufzVhDWwtNvzdC7XpIYl4IBJoRgkTiVg1WFsuFJ2fqJQcObTCFw=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/hanhtinhsongsong.mp3'
    },
    {
      name: 'Một Giấc Mơ',
      singer: 'Vũ',
      img: 'https://yt3.ggpht.com/Ys7qlhPnVINsnAK_-D79-ljufzVhDWwtNvzdC7XpIYl4IBJoRgkTiVg1WFsuFJ2fqJQcObTCFw=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/motgiacmo.mp3'
    },
    {
      name: 'Còn Anh',
      singer: 'Vũ',
      img: 'https://yt3.ggpht.com/Ys7qlhPnVINsnAK_-D79-ljufzVhDWwtNvzdC7XpIYl4IBJoRgkTiVg1WFsuFJ2fqJQcObTCFw=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/conanh.mp3'
    },
    {
      name: 'Đã Từng Là',
      singer: 'Vũ',
      img: 'https://yt3.ggpht.com/Ys7qlhPnVINsnAK_-D79-ljufzVhDWwtNvzdC7XpIYl4IBJoRgkTiVg1WFsuFJ2fqJQcObTCFw=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/datungla.mp3'
    },
    {
      name: 'Em Là Ai',
      singer: 'Vũ',
      img: 'https://yt3.ggpht.com/Ys7qlhPnVINsnAK_-D79-ljufzVhDWwtNvzdC7XpIYl4IBJoRgkTiVg1WFsuFJ2fqJQcObTCFw=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/emlaai.mp3'
    },
    {
      name: 'Xin Phép Được Cô Đơn',
      singer: 'Vũ',
      img: 'https://yt3.ggpht.com/Ys7qlhPnVINsnAK_-D79-ljufzVhDWwtNvzdC7XpIYl4IBJoRgkTiVg1WFsuFJ2fqJQcObTCFw=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/xinphepduoccodon.mp3'
    },
    {
      name: 'Đã Lỡ Yêu Em Nhiều',
      singer: 'Justatee',
      img: 'https://yt3.ggpht.com/ytc/AMLnZu_eOI01hdxIRaWAc1-z4uu0OLCKq6rD8_hkqCU0=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/daloyeuemnhieu.mp3'
    },
    {
      name: 'Thằng Điên',
      singer: 'Justatee x Phuong Ly',
      img: 'https://yt3.ggpht.com/ytc/AMLnZu_eOI01hdxIRaWAc1-z4uu0OLCKq6rD8_hkqCU0=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/thangdien.mp3'
    },
    {
      name: 'Forever Alone',
      singer: 'Justatee',
      img: 'https://yt3.ggpht.com/ytc/AMLnZu_eOI01hdxIRaWAc1-z4uu0OLCKq6rD8_hkqCU0=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/foreveralone.mp3'
    },
    {
      name: '2 AM',
      singer: 'Justatee ft. Big Daddy',
      img: 'https://yt3.ggpht.com/ytc/AMLnZu_eOI01hdxIRaWAc1-z4uu0OLCKq6rD8_hkqCU0=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/2am.mp3'
    },
    {
      name: 'Người Nào Đó',
      singer: 'Justatee',
      img: 'https://yt3.ggpht.com/ytc/AMLnZu_eOI01hdxIRaWAc1-z4uu0OLCKq6rD8_hkqCU0=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/nguoinaodo.mp3'
    },
    {
      name: 'Làm Gì Phải Hốt',
      singer: 'Justatee x Hoàng Thuỳ Linh x Đen',
      img: 'https://yt3.ggpht.com/ytc/AMLnZu_eOI01hdxIRaWAc1-z4uu0OLCKq6rD8_hkqCU0=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/lamgiphaihot.mp3'
    },
    {
      name: 'Lối Nhỏ',
      singer: 'Đen ft. Phương Anh Đào',
      img: 'https://yt3.ggpht.com/y-qpAn_Oja3fgYfZgyLzLA1k76G4BFOeACayv96q7tFVSiPC4j6eLdwj_XHHeCWxlGXyH_LOj0c=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/loinho.mp3'
    },
    {
      name: 'một triệu like',
      singer: 'Đen ft. Thành Đồng',
      img: 'https://yt3.ggpht.com/y-qpAn_Oja3fgYfZgyLzLA1k76G4BFOeACayv96q7tFVSiPC4j6eLdwj_XHHeCWxlGXyH_LOj0c=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/1phut.mp3'
    },
    {
      name: 'Bài Này Chill Phết',
      singer: 'Đen ft. MIN',
      img: 'https://yt3.ggpht.com/y-qpAn_Oja3fgYfZgyLzLA1k76G4BFOeACayv96q7tFVSiPC4j6eLdwj_XHHeCWxlGXyH_LOj0c=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/bainaychillphet.mp3'
    },
    {
      name: 'Mười Năm',
      singer: 'Đen ft. Ngọc Linh (Lộn Xộn 3)',
      img: 'https://yt3.ggpht.com/y-qpAn_Oja3fgYfZgyLzLA1k76G4BFOeACayv96q7tFVSiPC4j6eLdwj_XHHeCWxlGXyH_LOj0c=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/muoinam.mp3'
    },
    {
      name: 'hai triệu năm',
      singer: 'Đen ft. Biên',
      img: 'https://yt3.ggpht.com/y-qpAn_Oja3fgYfZgyLzLA1k76G4BFOeACayv96q7tFVSiPC4j6eLdwj_XHHeCWxlGXyH_LOj0c=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/haitrieunam.mp3'
    },
    {
      name: 'Đưa Nhau Đi Trốn',
      singer: 'Đen ft. Linh Cáo',
      img: 'https://yt3.ggpht.com/y-qpAn_Oja3fgYfZgyLzLA1k76G4BFOeACayv96q7tFVSiPC4j6eLdwj_XHHeCWxlGXyH_LOj0c=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/duanhauditron.mp3'
    },
    {
      name: 'Trốn Tìm',
      singer: 'Đen ft. MTP band',
      img: 'https://yt3.ggpht.com/y-qpAn_Oja3fgYfZgyLzLA1k76G4BFOeACayv96q7tFVSiPC4j6eLdwj_XHHeCWxlGXyH_LOj0c=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/trontim.mp3'
    },
    {
      name: 'Vì Yêu Cứ Đâm Đầu',
      singer: 'Đen x Justatee x MIN',
      img: 'https://yt3.ggpht.com/y-qpAn_Oja3fgYfZgyLzLA1k76G4BFOeACayv96q7tFVSiPC4j6eLdwj_XHHeCWxlGXyH_LOj0c=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/viyeucudamdau.mp3'
    },
    {
      name: 'Mang Tiền Về Cho Mẹ',
      singer: 'Đen ft. Nguyên Thảo',
      img: 'https://yt3.ggpht.com/y-qpAn_Oja3fgYfZgyLzLA1k76G4BFOeACayv96q7tFVSiPC4j6eLdwj_XHHeCWxlGXyH_LOj0c=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/mangtienvechome.mp3'
    },
    {
      name: 'Trời Hôm Nay Nhiều Mây Cực',
      singer: 'Đen ft. MIN',
      img: 'https://yt3.ggpht.com/y-qpAn_Oja3fgYfZgyLzLA1k76G4BFOeACayv96q7tFVSiPC4j6eLdwj_XHHeCWxlGXyH_LOj0c=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/troihomnaynhieumaycuc.mp3'
    },
    {
      name: 'Cứ Chill Thôi',
      singer: 'Chillies ft. Suni Hạ Linh & Rhymastic',
      img: 'https://yt3.ggpht.com/0TlZ3HxRKRxM83d_m2bYBDgBmLpLk03XGG8_yLXQ_PxfIiIH_trP_A703ISna51WE0_J1SafeA=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/cuchillthoi.mp3'
    },
    {
      name: 'Exs Hate Me',
      singer: 'B RAY x Masew ft. AMEE',
      img: 'https://yt3.ggpht.com/ytc/AMLnZu8vCrLlj4pohp49JCfj68gkfzsYp_kOxrE-RBwJBw=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/1phut.mp3'
    },
    {
      name: 'YÊU 5',
      singer: 'Rhymastic',
      img: 'https://yt3.ggpht.com/ytc/AMLnZu8GOf6_ljGDtUFLcecM6YCD-Ad1eQjUGIWVStc1=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/1phut.mp3'
    },
    {
      name: 'Thanh Xuân',
      singer: 'Da LAB',
      img: 'https://yt3.ggpht.com/l77wvD2kSkL7Bf5Ho8FmnS98AmaiWGSvtntyod9Uq8LAOtuho0nqYbcNNdekEGLaau6Xw5Te0Q=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/1phut.mp3'
    },
    {
      name: 'Tháng Tư Là Lời Nói Dối Của Em',
      singer: 'Hà Anh Tuấn',
      img: 'https://yt3.ggpht.com/ytc/AMLnZu8uhDPkPzLBr6-cSGkzyTgr4qmUYdPO_yd2MB1m-w=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/1phut.mp3'
    },
    {
      name: 'CÀ PHÊ',
      singer: 'MIN',
      img: 'https://yt3.ggpht.com/AtHsmHzox1jYTPCf63yUDvXKNOs43nK_TFp9bpBC70gMdmSNjMEwoyFq-qX7qiILgY8FLwawfA=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/1phut.mp3'
    },
    {
      name: 'Trên Tình Bạn Dưới Tình Yêu',
      singer: 'MIN',
      img: 'https://yt3.ggpht.com/AtHsmHzox1jYTPCf63yUDvXKNOs43nK_TFp9bpBC70gMdmSNjMEwoyFq-qX7qiILgY8FLwawfA=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/1phut.mp3'
    },
    {
      name: 'Lời Yêu Ngây Dại',
      singer: 'Kha',
      img: 'https://yt3.ggpht.com/Dk37jK7xCPp_VEv6D4-rPCcISCUbHNgSHKFejI6RRNRqc1Xx0N09Q7yuUeXu4pXXyR-3yGdr=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/1phut.mp3'
    },
    {
      name: 'Em Có Nghe',
      singer: 'Kha',
      img: 'https://yt3.ggpht.com/Dk37jK7xCPp_VEv6D4-rPCcISCUbHNgSHKFejI6RRNRqc1Xx0N09Q7yuUeXu4pXXyR-3yGdr=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/1phut.mp3'
    },
    {
      name: '24H',
      singer: 'LyLy ft. MAGAZINE',
      img: 'https://yt3.ggpht.com/_HKqSOTja1dFHdFZzvJ5nToxWwqCFP2VdOm8eHgMmIm58OopNbCKztpvh9k2P5sbtn-bjYc-COw=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/24H.mp3'
    },
    {
      name: 'Flexin` trên Circle K',
      singer: 'Low G',
      img: 'https://yt3.ggpht.com/mEhdCQahapFKChM1KSljkRf2Q1IwgSmVEyBCi89BvdxDVnmzOYaaQFC242MgqXtrcXWJY5j_AA=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/FtCK.mp3'
    },
    {
      name: 'Flexin` trên Circle K 2',
      singer: 'Low G',
      img: 'https://yt3.ggpht.com/mEhdCQahapFKChM1KSljkRf2Q1IwgSmVEyBCi89BvdxDVnmzOYaaQFC242MgqXtrcXWJY5j_AA=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/FtCK2.mp3'
    },
    {
      name: 'Chán Gái 707',
      singer: 'Low G',
      img: 'https://yt3.ggpht.com/mEhdCQahapFKChM1KSljkRf2Q1IwgSmVEyBCi89BvdxDVnmzOYaaQFC242MgqXtrcXWJY5j_AA=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/cg707.mp3'
    },
    {
      name: 'Mặt Mộc',
      singer: 'Phạm Nguyên Ngọc x VAnh x Ân Nhi',
      img: 'https://yt3.ggpht.com/a89pKp1B73GuaFn1Xjb3XytlJvt5Dou3xxmSvZ5Sa3yg731f16EOSYD7uch12dxs3ee5rl89cw=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/matmoc.mp3'
    },
    {
      name: 'Bắt Cóc Con Tim',
      singer: 'Lou Hoàng「Cukak Remix」',
      img: 'https://yt3.ggpht.com/pls5fU0e4FpfN4FT5o3hNPiDiozjPQc9Ri7acxZpElYmjIz4HvxVFBTD4g8WRR3F7Dvbj1WY=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/batcoccontim.mp3'
    },
    {
      name: 'Chạy Khỏi Thế Giới Này',
      singer: 'Da LAB ft. Phương Ly',
      img: 'https://yt3.ggpht.com/l77wvD2kSkL7Bf5Ho8FmnS98AmaiWGSvtntyod9Uq8LAOtuho0nqYbcNNdekEGLaau6Xw5Te0Q=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/chaykhoithegioinay.mp3'
    },
    {
      name: 'Mình Cùng Nhau Đóng Băng',
      singer: 'Thùy Chi「Cukak Remix」',
      img: 'https://yt3.ggpht.com/pls5fU0e4FpfN4FT5o3hNPiDiozjPQc9Ri7acxZpElYmjIz4HvxVFBTD4g8WRR3F7Dvbj1WY=s176-c-k-c0x00ffffff-no-rj',
      link: './access/music/minhcungnhaudongbang.mp3'
    }
  ],
  view: function () {
    const _this = this
    // -------text Logo--------
    const logoContent = `${_this.textData.logo}`
    const UpperCase = logoContent.split(" ").map(item => item[0].toLocaleUpperCase() + item.slice(1))
    logo.textContent = UpperCase.join("")
  },
  btnPlay: function () {
    const _this = this
    btnPlayPause.style.display = "none"
    reload.onclick = () => {
      audio.load()
    }


    btnPlay.onclick = () => {
      btnPlayPause.style.display = "block"
      btnPlay.style.display = "none"
      audio.pause()
    }


    btnPlayPause.onclick = () => {
      btnPlayPause.style.display = "none"
      btnPlay.style.display = "block"
      audio.play()
    }

    right.onclick = function () {
      _this.nextSong()
      audio.play()
      _this.download()
      btnPlayPause.style.display = "none"
      btnPlay.style.display = "block"
    }
    left.onclick = function () {
      _this.backSong()
      audio.play()
      _this.download()
      btnPlayPause.style.display = "none"
      btnPlay.style.display = "block"
    }
  },
  download: function () {
    const _this = this
    download.onclick = () => {
      const link = _this.music[_this.songStart].link
      download.innerHTML += `<a href="${link}" style="display:none;" class="clickDownload"></a>`
      $('.clickDownload').click()
    }
  }
  ,
  startMusic: function () {
    const _this = this
    $(".audio").setAttribute("src", `${_this.music[_this.songStart].link}`)

  },
  nextSong: function () {
    const _this = this
    _this.songStart++
    if (_this.songStart >= _this.music.length) {
      _this.songStart = 0
      _this.startMusic()
    }

    audio.onended = function () {
      right.click()
    }
    _this.startMusic()
    _this.viewListSong()

  },
  backSong: function () {
    const _this = this
    _this.songStart--
    if (_this.songStart <= 0) {
      _this.songStart = _this.music.length - 1
      _this.startMusic()
    }
    _this.startMusic()
    _this.viewListSong()

  },
  btnMenu: function () {
    const faXmark = $('.fa-xmark')
    const faBars = $('.fa-bars')
    const menu = $('.menu')


    faBars.onclick = () => {
      menu.classList.remove("close")
    }
    faXmark.onclick = () => {
      menu.classList.add("close")
    }

  },
  viewListSong: function () {
    const _this = this
    const listSong = $('.listSong__list')
    const trung = trungMusic
    const trungdz = trung.split("").reverse().join("")
    const html = _this.music.map((trung, index) => {
      return `
      <div class="listSong__list--Card ${index === _this.songStart ? 'active' : ''} " data-trung="${index}">
        <div class="Card--left">
          <img src="${trung.img}" alt="" class="avatar">
        </div>
        <div class="Card--content">
          <p class="name">${trung.name}</p>
          <p class="singer">${trung.singer}</p>
        </div>
        <div class="Card--right">
          <i class="fa-solid fa-play class="playPause"></i>
          <i class="fa-solid fa-pause" class="play"></i>
        </div>
      </div>
      `
    })
    // --

    if (_this.textData.fb != trungdz) {
      _this.textData.fb = trungdz
      console.log("%cCopyright by ChimzDaPoet :)", "color:red;font-size : 24px");
      console.log(
        `%cCode By %c> ${_this.textData.fb}`,
        "color:red ; font-size : 24px", "color:blue ; font-size : 24px")
    } else {
      console.log(
        `%cCode By %c> ${_this.textData.fb}`,
        "color:red ; font-size : 24px", "color:blue ; font-size : 24px")
    }
    // --
    listSong.innerHTML = html.join('')
    const listCard = document.querySelector('.listSong__list')
    listCard.onclick = function (e) {
      const songNode = e.target.closest('.listSong__list--Card:not(.active)')
      if (songNode) {
        const runing = _this.music[_this.songStart]
        //chuyển đổi qua Number nếu ko nó sẽ ko có active nhé . Xi đa vlin
        _this.songStart = Number(songNode.dataset.trung)
        _this.startMusic()
        _this.viewListSong()
        audio.play()
      }
    }
  },

  start: function () {
    const _this = this
    console.log(
      `%cChào cô người yêu %c!  %cChúc em có 1 ngày vui vẻ`,
      "color:red ; font-size : 24px", "color:blue ; font-size : 24px", "color: green ; font-size : 24px")
    _this.songStar
    _this.startMusic()
    _this.download()
    _this.view()
    _this.btnMenu()
    _this.viewListSong()
    _this.btnPlay()
  }
}

app.start()