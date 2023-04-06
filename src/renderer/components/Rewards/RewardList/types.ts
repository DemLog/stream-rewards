export type Reward = {
  id: string;
  title: string;
  prompt: string;
  cost: number;
  image: {
    url_1x: string;
    url_2x: string;
    url_4x: string;
  };
  background_color: string;
  is_enabled: boolean;
  is_user_input_required: boolean;
  max_per_stream_setting: {
    is_enabled: boolean;
    max_per_stream: number;
  };
  max_per_user_per_stream_setting: {
    is_enabled: boolean;
    max_per_user_per_stream: number;
  };
  global_cooldown_setting: {
    is_enabled: boolean;
    global_cooldown_seconds: number;
  };
};