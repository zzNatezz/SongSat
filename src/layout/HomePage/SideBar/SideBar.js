import {ListGeneral, ListMenu} from '../../../StoreAll/StoreVisual'
import Icon from "../../../asset/icon/Icon";
import Picture from "../../../asset/picture/Pictrure";
import "./SideBar.scss";
import ListSideBar from "./component/ListSideBar";

function SideBar() {
  return (
    <main className="sideBar-container">
      <div className="sidebar-header">
        <img src={Icon.mask_group} alt="logo_mask" />
        <p>SoundCloud</p>
      </div>
      <ListSideBar Title="MENU" array={ListMenu} />
      <ListSideBar Title="GENERAL" array={ListGeneral} />
      <div className="sideBar-bottom">
        <h5 className="bottom-header">GO MOBILE</h5>
        <div className="bottom-picture">
          <img className="picture" src={Picture.appStore} alt="appstor-logo" />
          <img className="picture" src={Picture.googlePlay} alt="googlePlay-logo" />
        </div>
        <div className="bottom-copyright">
          Legal ⁃ Privacy ⁃ Cookie Policy ⁃ Cookie Blog Manage ⁃ Imprint
          Resource Chart
        </div>
        <div className="bottom-language">
          <p className="bottom-language-title">Language:</p>English (US)</div>
      </div>
    </main>
  );
}

export default SideBar;
