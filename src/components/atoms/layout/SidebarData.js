import {
    HomeOutlined,
    MailOutlined,
    BarChartOutlined,
    UserAddOutlined,
    PayCircleOutlined,
    CloudUploadOutlined,
    SettingOutlined,
  } from '@ant-design/icons';

// TypeScript化が課題…

export const SidevarData = [
    {
        title: "ホーム",
        icon: <HomeOutlined />,
        link: "/home",
      },
      {
        title: "ページ1",
        icon: <MailOutlined />,
        link: "/mail",
      },
      {
        title: "ページ2",
        icon: <BarChartOutlined />,
        link: "/analitics",
      },
/*
      {
        title: "友達追加",
        icon: <UserAddOutlined />,
        link: "/friends",
      },
      {
        title: "お支払い設定",
        icon: <PayCircleOutlined />,
        link: "/payment",
      },
      {
        title: "アップロード",
        icon: <CloudUploadOutlined />,
        link: "/upload",
      },
      {
        title: "詳細設定",
        icon: <SettingOutlined />,
        link: "/rocket",
      },
*/
]
