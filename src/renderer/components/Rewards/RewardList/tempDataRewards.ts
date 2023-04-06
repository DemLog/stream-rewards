import { Reward } from './types';

export const rewardsList: Reward[] = [
  {
    id: "1",
    title: "Название награды 1",
    prompt: "Описание награды 1",
    cost: 100,
    image: {
      url_1x: "https://static-cdn.jtvnw.net/automatic-reward-images/highlight-2.png",
      url_2x: "https://static-cdn.jtvnw.net/automatic-reward-images/highlight-2.png",
      url_4x: "https://static-cdn.jtvnw.net/automatic-reward-images/highlight-2.png",
    },
    background_color: "#FF0000",
    is_enabled: true,
    is_user_input_required: false,
    max_per_stream_setting: {
      is_enabled: true,
      max_per_stream: 1,
    },
    max_per_user_per_stream_setting: {
      is_enabled: true,
      max_per_user_per_stream: 1,
    },
    global_cooldown_setting: {
      is_enabled: true,
      global_cooldown_seconds: 60,
    },
  },
  {
    id: "2",
    title: "Название награды 2",
    prompt: "Описание награды 2",
    cost: 200,
    image: {
      url_1x: "https://static-cdn.jtvnw.net/automatic-reward-images/highlight-2.png",
      url_2x: "https://static-cdn.jtvnw.net/automatic-reward-images/highlight-2.png",
      url_4x: "https://static-cdn.jtvnw.net/automatic-reward-images/highlight-2.png",
    },
    background_color: "#00FF00",
    is_enabled: true,
    is_user_input_required: true,
    max_per_stream_setting: {
      is_enabled: true,
      max_per_stream: 2,
    },
    max_per_user_per_stream_setting: {
      is_enabled: true,
      max_per_user_per_stream: 2,
    },
    global_cooldown_setting: {
      is_enabled: true,
      global_cooldown_seconds: 120,
    },
  },
  {
    id: "3",
    title: "Название награды 3",
    prompt: "Описание награды 3",
    cost: 300,
    image: {
      url_1x: "https://static-cdn.jtvnw.net/automatic-reward-images/random-emote-2.png",
      url_2x: "https://static-cdn.jtvnw.net/automatic-reward-images/random-emote-2.png",
      url_4x: "https://static-cdn.jtvnw.net/automatic-reward-images/random-emote-2.png",
    },
    background_color: "#0000FF",
    is_enabled: true,
    is_user_input_required: false,
    max_per_stream_setting: {
      is_enabled: true,
      max_per_stream: 3,
    },
    max_per_user_per_stream_setting: {
      is_enabled: true,
      max_per_user_per_stream: 3,
    },
    global_cooldown_setting: {
      is_enabled: true,
      global_cooldown_seconds: 180,
    },
  },
  {
    id: "4",
    title: "Название награды 4",
    prompt: "Описание награды 4",
    cost: 400,
    image: {
      url_1x: "https://static-cdn.jtvnw.net/automatic-reward-images/highlight-4.png",
      url_2x: "https://static-cdn.jtvnw.net/automatic-reward-images/highlight-4.png",
      url_4x: "https://static-cdn.jtvnw.net/automatic-reward-images/highlight-4.png",
    },
    background_color: "#FFFF00",
    is_enabled: true,
    is_user_input_required: true,
    max_per_stream_setting: {
      is_enabled: true,
      max_per_stream: 4,
    },
    max_per_user_per_stream_setting: {
      is_enabled: true,
      max_per_user_per_stream: 4,
    },
    global_cooldown_setting: {
      is_enabled: true,
      global_cooldown_seconds: 240,
    },
  },
  {
    id: "5",
    title: "Название награды 5",
    prompt: "Описание награды 5",
    cost: 500,
    image: {
      url_1x: "https://static-cdn.jtvnw.net/automatic-reward-images/random-emote-2.png",
      url_2x: "https://static-cdn.jtvnw.net/automatic-reward-images/random-emote-2.png",
      url_4x: "https://static-cdn.jtvnw.net/automatic-reward-images/random-emote-2.png",
    },
    background_color: "#00FFFF",
    is_enabled: true,
    is_user_input_required: false,
    max_per_stream_setting: {
      is_enabled: true,
      max_per_stream: 5,
    },
    max_per_user_per_stream_setting: {
      is_enabled: true,
      max_per_user_per_stream: 5,
    },
    global_cooldown_setting: {
      is_enabled: true,
      global_cooldown_seconds: 300,
    },
  },
  {
    id: "6",
    title: "Название награды 6",
    prompt: "Описание награды 6",
    cost: 600,
    image: {
      url_1x: "https://cdn-icons-png.flaticon.com/512/564/564619.png",
      url_2x: "https://cdn-icons-png.flaticon.com/1024/564/564619.png",
      url_4x: "https://cdn-icons-png.flaticon.com/2048/564/564619.png",
    },
    background_color: "#0000FF",
    is_enabled: true,
    is_user_input_required: true,
    max_per_stream_setting: {
      is_enabled: true,
      max_per_stream: 3,
    },
    max_per_user_per_stream_setting: {
      is_enabled: true,
      max_per_user_per_stream: 3,
    },
    global_cooldown_setting: {
      is_enabled: true,
      global_cooldown_seconds: 180,
    },
  },
  {
    id: "7",
    title: "Название награды 7",
    prompt: "Описание награды 7",
    cost: 700,
    image: {
      url_1x: "https://cdn-icons-png.flaticon.com/512/1809/1809859.png",
      url_2x: "https://cdn-icons-png.flaticon.com/1024/1809/1809859.png",
      url_4x: "https://cdn-icons-png.flaticon.com/2048/1809/1809859.png",
    },
    background_color: "#00FFFF",
    is_enabled: true,
    is_user_input_required: false,
    max_per_stream_setting: {
      is_enabled: true,
      max_per_stream: 4,
    },
    max_per_user_per_stream_setting: {
      is_enabled: true,
      max_per_user_per_stream: 4,
    },
    global_cooldown_setting: {
      is_enabled: true,
      global_cooldown_seconds: 240,
    },
  },
  {
    id: "8",
    title: "Название награды 8",
    prompt: "Описание награды 8",
    cost: 800,
    image: {
      url_1x: "https://static-cdn.jtvnw.net/automatic-reward-images/highlight-2.png",
      url_2x: "https://static-cdn.jtvnw.net/automatic-reward-images/highlight-2.png",
      url_4x: "https://static-cdn.jtvnw.net/automatic-reward-images/highlight-2.png",
    },
    background_color: "#FFFF00",
    is_enabled: true,
    is_user_input_required: false,
    max_per_stream_setting: {
      is_enabled: true,
      max_per_stream: 3,
    },
    max_per_user_per_stream_setting: {
      is_enabled: true,
      max_per_user_per_stream: 3,
    },
    global_cooldown_setting: {
      is_enabled: true,
      global_cooldown_seconds: 180,
    },
  },
  {
    id: "9",
    title: "Название награды 9",
    prompt: "Описание награды 9",
    cost: 900,
    image: {
      url_1x: "https://static-cdn.jtvnw.net/automatic-reward-images/highlight-2.png",
      url_2x: "https://static-cdn.jtvnw.net/automatic-reward-images/highlight-2.png",
      url_4x: "https://static-cdn.jtvnw.net/automatic-reward-images/highlight-2.png",
    },
    background_color: "#00FFFF",
    is_enabled: true,
    is_user_input_required: true,
    max_per_stream_setting: {
      is_enabled: true,
      max_per_stream: 4,
    },
    max_per_user_per_stream_setting: {
      is_enabled: true,
      max_per_user_per_stream: 4,
    },
    global_cooldown_setting: {
      is_enabled: true,
      global_cooldown_seconds: 240,
    },
  },
  {
    id: "10",
    title: "Название награды 10",
    prompt: "Описание награды 10",
    cost: 1000,
    image: {
      url_1x: "https://cdn-icons-png.flaticon.com/512/4388/4388054.png",
      url_2x: "https://cdn-icons-png.flaticon.com/1024/4388/4388054.png",
      url_4x: "https://cdn-icons-png.flaticon.com/2048/4388/4388054.png",
    },
    background_color: "#008080",
    is_enabled: true,
    is_user_input_required: false,
    max_per_stream_setting: {
      is_enabled: true,
      max_per_stream: 1,
    },
    max_per_user_per_stream_setting: {
      is_enabled: true,
      max_per_user_per_stream: 1,
    },
    global_cooldown_setting: {
      is_enabled: true,
      global_cooldown_seconds: 300,
    },
  },
  {
    id: "11",
    title: "Название награды 11",
    prompt: "Описание награды 11",
    cost: 1100,
    image: {
      url_1x: "https://cdn-icons-png.flaticon.com/512/4388/4388047.png",
      url_2x: "https://cdn-icons-png.flaticon.com/1024/4388/4388047.png",
      url_4x: "https://cdn-icons-png.flaticon.com/2048/4388/4388047.png",
    },
    background_color: "#FFA07A",
    is_enabled: true,
    is_user_input_required: true,
    max_per_stream_setting: {
      is_enabled: true,
      max_per_stream: 2,
    },
    max_per_user_per_stream_setting: {
      is_enabled: true,
      max_per_user_per_stream: 2,
    },
    global_cooldown_setting: {
      is_enabled: true,
      global_cooldown_seconds: 180,
    },
  },
  {
    id: "12",
    title: "Название награды 12",
    prompt: "Описание награды 12",
    cost: 1200,
    image: {
      url_1x: "https://cdn-icons-png.flaticon.com/512/4388/4388055.png",
      url_2x: "https://cdn-icons-png.flaticon.com/1024/4388/4388055.png",
      url_4x: "https://cdn-icons-png.flaticon.com/2048/4388/4388055.png",
    },
    background_color: "#483D8B",
    is_enabled: true,
    is_user_input_required: false,
    max_per_stream_setting: {
      is_enabled: true,
      max_per_stream: 1,
    },
    max_per_user_per_stream_setting: {
      is_enabled: true,
      max_per_user_per_stream: 1,
    },
    global_cooldown_setting: {
      is_enabled: true,
      global_cooldown_seconds: 240,
    },
  },
  {
    id: "13",
    title: "Название награды 13",
    prompt: "Описание награды 13",
    cost: 1300,
    image: {
      url_1x: "https://cdn-icons-png.flaticon.com/512/5529/5529988.png",
      url_2x: "https://cdn-icons-png.flaticon.com/1024/5529/5529988.png",
      url_4x: "https://cdn-icons-png.flaticon.com/2048/5529/5529988.png",
    },
    background_color: "#808080",
    is_enabled: true,
    is_user_input_required: false,
    max_per_stream_setting: {
      is_enabled: true,
      max_per_stream: 3,
    },
    max_per_user_per_stream_setting: {
      is_enabled: true,
      max_per_user_per_stream: 1,
    },
    global_cooldown_setting: {
      is_enabled: true,
      global_cooldown_seconds: 180,
    },
  },
  {
    id: "14",
    title: "Название награды 14",
    prompt: "Описание награды 14",
    cost: 1400,
    image: {
      url_1x: "https://cdn-icons-png.flaticon.com/512/1069/1069103.png",
      url_2x: "https://cdn-icons-png.flaticon.com/1024/1069/1069103.png",
      url_4x: "https://cdn-icons-png.flaticon.com/2048/1069/1069103.png",
    },
    background_color: "#008000",
    is_enabled: true,
    is_user_input_required: false,
    max_per_stream_setting: {
      is_enabled: true,
      max_per_stream: 4,
    },
    max_per_user_per_stream_setting: {
      is_enabled: true,
      max_per_user_per_stream: 2,
    },
    global_cooldown_setting: {
      is_enabled: true,
      global_cooldown_seconds: 240,
    },
  },
  {
    id: "15",
    title: "Название награды 15",
    prompt: "Описание награды 15",
    cost: 1500,
    image: {
      url_1x: "https://cdn-icons-png.flaticon.com/512/2659/2659675.png",
      url_2x: "https://cdn-icons-png.flaticon.com/1024/2659/2659675.png",
      url_4x: "https://cdn-icons-png.flaticon.com/2048/2659/2659675.png",
    },
    background_color: "#FFA500",
    is_enabled: true,
    is_user_input_required: true,
    max_per_stream_setting: {
      is_enabled: true,
      max_per_stream: 5,
    },
    max_per_user_per_stream_setting: {
      is_enabled: true,
      max_per_user_per_stream: 3,
    },
    global_cooldown_setting: {
      is_enabled: true,
      global_cooldown_seconds: 300,
    },
  }
];