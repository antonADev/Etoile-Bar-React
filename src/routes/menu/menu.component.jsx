import MenuCollapsible from '../../components/menu-collapsible/menu-collapsible.component';
import Hero from '../../components/hero/hero.component';
import PageHeader from '../../components/page-header/page-header.component';

import menuVideo from '../../assets/menu.mp4';
function Menu() {
  return (
    <>
      <Hero
        video={menuVideo}
        header='Menu'
        para='Scopri le nostre fantastiche proposte e lasciati deliziare'
      />
      <MenuCollapsible />
    </>
  );
}

export default Menu;
