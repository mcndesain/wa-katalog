var routes = [
  // Index page
  {
    path: '/',
    url: './index.html',
    name: 'home',
  },
  // About page
  {
    path: '/about/',
    url: './p/about.html',
    name: 'about',
  },
  // Right Panel pages
  {
    path: '/panel-right-1/',
    content: '\
      <div class="page">\
        <div class="navbar">\
          <div class="navbar-bg"></div>\
          <div class="navbar-inner sliding">\
            <div class="left">\
              <a href="#" class="link back">\
                <i class="icon icon-back"></i>\
                <span class="if-not-md">Back</span>\
              </a>\
            </div>\
            <div class="title">Panel Page 1</div>\
          </div>\
        </div>\
        <div class="page-content">\
          <div class="block">\
            <p>This is a right panel page 1</p>\
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>\
          </div>\
        </div>\
      </div>\
    ',
  },
  {
    path: '/panel-right-2/',
    content: '\
      <div class="page">\
        <div class="navbar">\
          <div class="navbar-bg"></div>\
          <div class="navbar-inner sliding">\
            <div class="left">\
              <a href="#" class="link back">\
                <i class="icon icon-back"></i>\
                <span class="if-not-md">Back</span>\
              </a>\
            </div>\
            <div class="title">Panel Page 2</div>\
          </div>\
        </div>\
        <div class="page-content">\
          <div class="block">\
            <p>This is a right panel page 2</p>\
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>\
          </div>\
        </div>\
      </div>\
    ',
  },

  // Components
  {
    path: '/accordion/',
    url: './p/accordion.html',
  },
  {
    path: '/action-sheet/',
    componentUrl: './p/action-sheet.html',
  },
  {
    path: '/appbar/',
    componentUrl: './p/appbar.html',
  },
  {
    path: '/autocomplete/',
    componentUrl: './p/autocomplete.html',
  },
  {
    path: '/badge/',
    componentUrl: './p/badge.html',
  },
  {
    path: '/buttons/',
    componentUrl: './p/buttons.html',
  },
  {
    path: '/calendar/',
    componentUrl: './p/calendar.html',
  },
  {
    path: '/calendar-page/',
    componentUrl: './p/calendar-page.html',
  },
  {
    path: '/cards/',
    url: './p/cards.html',
  },
  {
    path: '/cards-expandable/',
    url: './p/cards-expandable.html',
  },
  {
    path: '/checkbox/',
    componentUrl: './p/checkbox.html',
  },
  {
    path: '/chips/',
    componentUrl: './p/chips.html',
  },
  {
    path: '/color-picker/',
    componentUrl: './p/color-picker.html',
  },
  {
    path: '/contacts-list/',
    url: './p/contacts-list.html',
  },
  {
    path: '/content-block/',
    url: './p/content-block.html',
  },
  {
    path: '/data-table/',
    componentUrl: './p/data-table.html',
  },
  {
    path: '/dialog/',
    componentUrl: './p/dialog.html',
  },
  {
    path: '/elevation/',
    url: './p/elevation.html',
  },
  {
    path: '/fab/',
    url: './p/fab.html',
  },
  {
    path: '/fab-morph/',
    url: './p/fab-morph.html',
  },
  {
    path: '/form-storage/',
    url: './p/form-storage.html',
  },
  {
    path: '/gauge/',
    componentUrl: './p/gauge.html',
  },
  {
    path: '/grid/',
    url: './p/grid.html',
  },
  {
    path: '/icons/',
    componentUrl: './p/icons.html',
  },
  {
    path: '/infinite-scroll/',
    componentUrl: './p/infinite-scroll.html',
  },
  {
    path: '/inputs/',
    url: './p/inputs.html',
  },
  {
    path: '/lazy-load/',
    url: './p/lazy-load.html',
  },
  {
    path: '/list/',
    url: './p/list.html',
  },
  {
    path: '/list-index/',
    componentUrl: './p/list-index.html',
  },
  {
    path: '/login-screen/',
    componentUrl: './p/login-screen.html',
  },
  {
    path: '/login-screen-page/',
    componentUrl: './p/login-screen-page.html',
  },
  {
    path: '/menu/',
    componentUrl: './p/menu.html',
  },
  {
    path: '/messages/',
    componentUrl: './p/messages.html',
  },
  {
    path: '/navbar/',
    url: './p/navbar.html',
  },
  {
    path: '/navbar-hide-scroll/',
    url: './p/navbar-hide-scroll.html',
  },
  {
    path: '/notifications/',
    componentUrl: './p/notifications.html',
  },
  {
    path: '/panel/',
    url: './p/panel.html',
  },
  {
    path: '/photo-browser/',
    componentUrl: './p/photo-browser.html',
  },
  {
    path: '/picker/',
    componentUrl: './p/picker.html',
  },
  {
    path: '/popup/',
    componentUrl: './p/popup.html',
  },
  {
    path: '/popover/',
    url: './p/popover.html',
  },
  {
    path: '/preloader/',
    componentUrl: './p/preloader.html',
  },
  {
    path: '/progressbar/',
    componentUrl: './p/progressbar.html',
  },
  {
    path: '/pull-to-refresh/',
    componentUrl: './p/pull-to-refresh.html',
  },
  {
    path: '/radio/',
    url: './p/radio.html',
  },
  {
    path: '/range/',
    componentUrl: './p/range.html',
  },
  {
    path: '/searchbar/',
    url: './p/searchbar.html',
  },
  {
    path: '/searchbar-expandable/',
    url: './p/searchbar-expandable.html',
  },
  {
    path: '/sheet-modal/',
    componentUrl: './p/sheet-modal.html',
  },
  {
    path: '/skeleton/',
    componentUrl: './p/skeleton.html',
  },
  {
    path: '/smart-select/',
    url: './p/smart-select.html',
  },
  {
    path: '/sortable/',
    url: './p/sortable.html',
  },
  {
    path: '/stepper/',
    componentUrl: './p/stepper.html',
  },
  {
    path: '/subnavbar/',
    url: './p/subnavbar.html',
  },
  {
    path: '/subnavbar-title/',
    url: './p/subnavbar-title.html',
  },
  {
    path: '/swiper/',
    url: './p/swiper.html',
    routes: [
      {
        path: 'swiper-horizontal/',
        url: './p/swiper-horizontal.html',
      },
      {
        path: 'swiper-vertical/',
        url: './p/swiper-vertical.html',
      },
      {
        path: 'swiper-space-between/',
        url: './p/swiper-space-between.html',
      },
      {
        path: 'swiper-multiple/',
        url: './p/swiper-multiple.html',
      },
      {
        path: 'swiper-nested/',
        url: './p/swiper-nested.html',
      },
      {
        path: 'swiper-loop/',
        url: './p/swiper-loop.html',
      },
      {
        path: 'swiper-3d-cube/',
        url: './p/swiper-3d-cube.html',
      },
      {
        path: 'swiper-3d-coverflow/',
        url: './p/swiper-3d-coverflow.html',
      },
      {
        path: 'swiper-3d-flip/',
        url: './p/swiper-3d-flip.html',
      },
      {
        path: 'swiper-fade/',
        url: './p/swiper-fade.html',
      },
      {
        path: 'swiper-scrollbar/',
        url: './p/swiper-scrollbar.html',
      },
      {
        path: 'swiper-gallery/',
        componentUrl: './p/swiper-gallery.html',
      },
      {
        path: 'swiper-custom-controls/',
        url: './p/swiper-custom-controls.html',
      },
      {
        path: 'swiper-parallax/',
        url: './p/swiper-parallax.html',
      },
      {
        path: 'swiper-lazy/',
        url: './p/swiper-lazy.html',
      },
      {
        path: 'swiper-pagination-progress/',
        url: './p/swiper-pagination-progress.html',
      },
      {
        path: 'swiper-pagination-fraction/',
        url: './p/swiper-pagination-fraction.html',
      },
      {
        path: 'swiper-zoom/',
        url: './p/swiper-zoom.html',
      },
    ],
  },
  {
    path: '/swipeout/',
    componentUrl: './p/swipeout.html',
  },
  {
    path: '/tabs/',
    url: './p/tabs.html',
  },
  {
    path: '/tabs-static/',
    url: './p/tabs-static.html',
  },
  {
    path: '/tabs-animated/',
    url: './p/tabs-animated.html',
  },
  {
    path: '/tabs-swipeable/',
    url: './p/tabs-swipeable.html',
  },
  {
    path: '/tabs-routable/',
    url: './p/tabs-routable.html',
    tabs: [
      {
        path: '/',
        id: 'tab1',
        content: ' \
        <div class="block"> \
          <p>Tab 1 content</p> \
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p> \
          <p>Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed, sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur deleniti.</p> \
          <p>Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque, est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde delectus a maiores nihil dolores? Natus, perferendis.</p> \
        </div> \
        ',
      },
      {
        path: '/tab2/',
        id: 'tab2',
        content: '\
        <div class="block"> \
          <p>Tab 2 content</p> \
          <p>Suscipit, facere quasi atque totam. Repudiandae facilis at optio atque, rem nam, natus ratione cum enim voluptatem suscipit veniam! Repellat, est debitis. Modi nam mollitia explicabo, unde aliquid impedit! Adipisci!</p> \
          <p>Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro accusantium, officiis veniam nostrum cum cumque impedit.</p> \
          <p>Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.</p> \
        </div> \
        ',
      },
      {
        path: '/tab3/',
        id: 'tab3',
        content: '\
        <div class="block"> \
          <p>Tab 3 content</p> \
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p> \
          <p>Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro accusantium, officiis veniam nostrum cum cumque impedit.</p> \
          <p>Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.</p> \
        </div> \
        ',
      },
    ],
  },
  {
    path: '/text-editor/',
    componentUrl: './p/text-editor.html'
  },
  {
    path: '/toast/',
    componentUrl: './p/toast.html',
  },
  {
    path: '/toggle/',
    url: './p/toggle.html',
  },
  {
    path: '/toolbar-tabbar/',
    componentUrl: './p/toolbar-tabbar.html',
    routes: [
      {
        path: 'tabbar/',
        componentUrl: './p/tabbar.html',
      },
      {
        path: 'tabbar-labels/',
        componentUrl: './p/tabbar-labels.html',
      },
      {
        path: 'tabbar-scrollable/',
        componentUrl: './p/tabbar-scrollable.html',
      },
      {
        path: 'toolbar-hide-scroll/',
        url: './p/toolbar-hide-scroll.html',
      },
    ],
  },
  {
    path: '/tooltip/',
    componentUrl: './p/tooltip.html',
  },
  {
    path: '/treeview/',
    componentUrl: './p/treeview.html',
  },
  {
    path: '/timeline/',
    url: './p/timeline.html',
  },
  {
    path: '/timeline-vertical/',
    url: './p/timeline-vertical.html',
  },
  {
    path: '/timeline-horizontal/',
    url: './p/timeline-horizontal.html',
  },
  {
    path: '/timeline-horizontal-calendar/',
    url: './p/timeline-horizontal-calendar.html',
  },
  {
    path: '/virtual-list/',
    componentUrl: './p/virtual-list.html',
  },
  {
    path: '/virtual-list-vdom/',
    componentUrl: './p/virtual-list-vdom.html',
  },
  {
    path: '/vi/',
    componentUrl: './p/vi.html',
  },

  // Color Themes
  {
    path: '/color-themes/',
    componentUrl: './p/color-themes.html',
  },

  // Effects
  {
    path: '/page-transitions/',
    componentUrl: './p/page-transitions.html',
  },
  {
    path: '/page-transitions/:effect',
    componentUrl: './p/page-transitions-effect.html',
  },

  // Page Loaders
  {
    path: '/page-loader-template7/:user/:userId/:posts/:postId/',
    templateUrl: './p/page-loader-template7.html',
    // additional context
    options: {
      context: {
        foo: 'bar',
      },
    },
  },
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './p/page-loader-component.html',
    // additional context
    options: {
      context: {
        foo: 'bar',
      },
    },
  },
  {
    path: '/master-detail/',
    url: './p/master-detail-master.html',
    master: true,
    detailRoutes: [
      {
        path: '/master-detail/:id/',
        templateUrl: './p/master-detail-detail.html',
      },
    ]
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './p/404.html',
  },
];
