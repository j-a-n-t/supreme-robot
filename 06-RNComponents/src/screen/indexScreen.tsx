import { AnimationScreen101 } from "./AnimationScreen101";
import { AnimationScreen102 } from "./AnimationScreen102";
import { SwitchScreen } from "./SwitchScreen";
import { HomeScreen } from "./HomeScreen";
import { AlertScreen } from "./AlertScreen";
import { InputTextScreen } from "./InputTextScreen";
import { PullToRefreshScreen } from "./PullToRefreshScreen";
import { SectionListScreen } from "./SectionListScreen";
import { ModalScreen } from "./ModalScreen";
import { InfiniteScrollScreen } from "./InfiniteScrollScreen";
import { SlideScreen } from "./SlideScreen";

const indexScreen = {
  home: HomeScreen,
  animation101: AnimationScreen101,
  animation102: AnimationScreen102,
  switch: SwitchScreen,
  alerts: AlertScreen,
  inputText: InputTextScreen,
  pullToRefresh: PullToRefreshScreen,
  sectionLists: SectionListScreen,
  modal: ModalScreen,
  infiniteScroll: InfiniteScrollScreen,
  slide: SlideScreen,
};

export default indexScreen;
