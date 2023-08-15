document.addEventListener('DOMContentLoaded', function() {

  function hideTabContent(wrapper, allTabs, classActive) {
    wrapper.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show');
    })
    allTabs.forEach(item => {
      item.classList.remove(classActive);
    })
  };

  function showTabContent(i = 0, wrapper, allTabs, classActive) {
    wrapper[i].classList.add('show', 'fade');
    wrapper[i].classList.remove('hide');
    allTabs[i].classList.add(classActive);
  }

  //характеристики движка

  const tabs = document.querySelectorAll('.content__variable');
  const tabsContent = document.querySelectorAll('.content__engine_wrapper');
  const tabsParrent = document.querySelector('.content__variables');
  
  
  hideTabContent(tabsContent, tabs, 'content__variable_active');
  showTabContent(0, tabsContent, tabs, 'content__variable_active');

  tabsParrent.addEventListener('click', event => {
    const target = event.target;
    if (target && target.classList.contains('content__variable')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent(tabsContent, tabs, 'content__variable_active');
          showTabContent(i, tabsContent, tabs, 'content__variable_active');
        }
      });
    }
  });
  //конец скрипта переключения мощности движка
  //Технологии

  const dots = document.querySelectorAll('.main__ellipse');
  const dotsContent = document.querySelectorAll('.main__technologs_wrapper');
  const dotsParrent = document.querySelector('.main__dots');

  hideTabContent(dotsContent, dots, 'main__ellipse_active');
  showTabContent(0, dotsContent, dots, 'main__ellipse_active');

  dotsParrent.addEventListener('click', dot => {
    const dotTarget = dot.target;
    if (dotTarget && dotTarget.classList.contains('main__ellipse')) {
      dots.forEach((item, i) => {
        if (dotTarget == item) {
          hideTabContent(dotsContent, dots, 'main__ellipse_active');
          showTabContent(i, dotsContent, dots, 'main__ellipse_active');
        }
      });
    }
  });
//Конец скрипта технологии
//Скрипт выбора цветов
const colors = document.querySelectorAll('.configurator__color_box');
const colorsContent = document.querySelectorAll('.configurator__circle');
const colorsParrent = document.querySelector('.configurator__colors_wrapper');

hideTabContent(colorsContent, colors, 'configurator__color_box_active');
showTabContent(0, colorsContent, colors, 'configurator__color_box_active');

colorsParrent.addEventListener('click', item => {
  const target = item.target;
  if(target && target.classList.contains('configurator__color_box')) {
    colors.forEach((item, i) => {
      if(target == item) {
        hideTabContent(colorsContent, colors, 'configurator__color_box_active');
        showTabContent(i, colorsContent, colors, 'configurator__color_box_active');
      }
    });
  }
});
//конец выбра цветов

})