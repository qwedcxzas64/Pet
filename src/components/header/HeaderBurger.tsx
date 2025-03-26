
const styles = require('../../styles/main.module.scss');




const HeaderBurger = (props:any) =>{
 
    const fill  = props.fill

    return (
        <div className={ fill === 'open'? styles.header__burger_wrapper : styles.header__burger_hidden}>
            <ul className={styles.header__burger_list}>
                <li> <svg className={styles.header__burger_svg} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.3527 15.0805C14.4867 14.4188 11.8191 13.8388 13.1108 11.3987C17.0443 3.9718 14.1534 0 10.0007 0C5.7656 0 2.94717 4.1243 6.89064 11.3987C8.22151 13.853 5.45309 14.433 2.64883 15.0805C0.0879081 15.6722 -0.00792858 16.9439 0.000405028 19.1673L0.00373847 20.0007H19.9961L19.9994 19.1931C20.0094 16.9531 19.9227 15.6747 17.3527 15.0805Z" fill="#2F3035" />
</svg>
                    <a href="#">Войти</a></li>
                <svg className={styles.header__burger_line} width="242" height="2" viewBox="0 0 242 2" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 1L242.002 1" stroke="black" stroke-opacity="0.1" />
</svg>
<li>
<svg  className={styles.header__burger_svg} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.3527 15.0805C14.4867 14.4188 11.8191 13.8388 13.1108 11.3987C17.0443 3.9718 14.1534 0 10.0007 0C5.7656 0 2.94717 4.1243 6.89064 11.3987C8.22151 13.853 5.45309 14.433 2.64883 15.0805C0.0879081 15.6722 -0.00792858 16.9439 0.000405028 19.1673L0.00373847 20.0007H19.9961L19.9994 19.1931C20.0094 16.9531 19.9227 15.6747 17.3527 15.0805Z" fill="#2F3035" />
</svg>
    <a href="#">Регистрация</a></li>
                <svg className={styles.header__burger_line}  width="242" height="2" viewBox="0 0 242 2" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 1L242.002 1" stroke="black" stroke-opacity="0.1" />
</svg>
<li>
<svg   className={styles.header__burger_svg}width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 6.85744C10.195 5.9241 11.2892 1.6666 14.485 1.6666C16.335 1.6666 18.3333 2.9591 18.3333 5.83577C18.3333 9.0916 15.3108 12.8941 10 16.3599C4.68917 12.8941 1.66667 9.0916 1.66667 5.83577C1.66667 2.93244 3.64083 1.66494 5.48083 1.66494C8.75 1.66494 9.76833 5.9366 10 6.85744ZM0 5.83577C0 9.22577 2.55 13.7366 10 18.3333C17.45 13.7366 20 9.22577 20 5.83577C20 -0.799231 11.96 -1.68756 10 2.7216C8.05167 -1.6634 0 -0.836731 0 5.83577Z" fill="#2F3035" />
</svg>
    <a href="#">Избранное</a></li>
                <svg className={styles.header__burger_line}  width="242" height="2" viewBox="0 0 242 2" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 1L242.002 1" stroke="black" stroke-opacity="0.1" />
</svg>
<li>
<svg  className={styles.header__burger_svg} width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M30 0L29.0713 2.5H26.66L22.3175 17.5H5.76875L0 3.75H21.015L20.31 6.25H3.76L7.43125 15H20.4662L24.7563 0H30ZM10.625 18.75C9.59 18.75 8.75 19.59 8.75 20.625C8.75 21.6612 9.59 22.5 10.625 22.5C11.66 22.5 12.5 21.6612 12.5 20.625C12.5 19.59 11.66 18.75 10.625 18.75ZM19.25 10L16.875 18.75C15.84 18.75 15 19.5888 15 20.625C15 21.6612 15.84 22.5 16.875 22.5C17.91 22.5 18.75 21.6612 18.75 20.625C18.75 19.59 17.91 18.75 16.875 18.75L19.25 10Z" fill="#2F3035" />
</svg>
    <a href="#">Корзина</a></li>
                <svg  className={styles.header__burger_line}  width="242" height="2" viewBox="0 0 242 2" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 1L242.002 1" stroke="black" stroke-opacity="0.1" />
</svg>
<li>
<svg className={styles.header__burger_svg} width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.83333 13.3429C6.55719 13.3429 6.33333 13.5667 6.33333 13.8429V19.7C6.33333 19.9761 6.10948 20.2 5.83333 20.2H1.5C1.22386 20.2 1 19.9761 1 19.7V8.08711C1 7.94115 1.06378 7.80247 1.1746 7.70748L8.6746 1.27891C8.86185 1.11842 9.13815 1.11842 9.3254 1.27891L16.8254 7.70748C16.9362 7.80247 17 7.94115 17 8.08711V19.7C17 19.9761 16.7761 20.2 16.5 20.2H12.1667C11.8905 20.2 11.6667 19.9761 11.6667 19.7V13.8429C11.6667 13.5667 11.4428 13.3429 11.1667 13.3429H6.83333Z" stroke="#2F3035" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>
    <a href="#">Магазины</a></li>
                <svg className={styles.header__burger_line}  width="242" height="2" viewBox="0 0 242 2" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 1L242.002 1" stroke="black" stroke-opacity="0.1" />
</svg>
<li>
<svg className={styles.header__burger_svg} width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.1708 3.14282H17.0714V15.1641C17.0714 15.6815 16.6056 16 16.1009 16H1.89286C1.3882 16 1 15.6019 1 15.0844V3.14282H6.82298" stroke="#2F3035" stroke-width="1.5" stroke-miterlimit="10" />
  <path d="M11.3853 3.14286H17.0165C17.0553 3.14286 17.0942 3.11088 17.0553 3.07889L14.9582 1H3.11323L1.01609 3.07889C0.97725 3.11088 1.01609 3.14286 1.05492 3.14286H6.68614" stroke="#2F3035" stroke-width="1.5" stroke-miterlimit="10" />
  <path d="M11.7141 3.14286L10.7824 1H7.38178L6.35693 3.14286" stroke="#2F3035" stroke-width="1.5" stroke-miterlimit="10" />
  <path d="M11.7141 3.14282V7.42854L9.10419 5.92274L6.35693 7.42854V3.14282" stroke="#2F3035" stroke-width="1.5" stroke-miterlimit="10" />
  <path d="M10.9864 11.7143H7.1218C6.67898 11.7143 6.35693 11.276 6.35693 10.7889V10.4967C6.35693 9.96102 6.71924 9.57141 7.1218 9.57141H10.9461C11.389 9.57141 11.711 10.0097 11.711 10.4967V10.7889C11.7513 11.3247 11.389 11.7143 10.9864 11.7143Z" stroke="#2F3035" stroke-width="1.5" stroke-miterlimit="10" />
</svg>
    <a href="#">Акции</a></li>
                <svg className={styles.header__burger_line}  width="242" height="2" viewBox="0 0 242 2" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 1L242.002 1" stroke="black" stroke-opacity="0.1" />
</svg>
<li>
<svg className={styles.header__burger_svg} width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.1708 3.14282H17.0714V15.1641C17.0714 15.6815 16.6056 16 16.1009 16H1.89286C1.3882 16 1 15.6019 1 15.0844V3.14282H6.82298" stroke="#2F3035" stroke-width="1.5" stroke-miterlimit="10" />
  <path d="M11.3853 3.14286H17.0165C17.0553 3.14286 17.0942 3.11088 17.0553 3.07889L14.9582 1H3.11323L1.01609 3.07889C0.97725 3.11088 1.01609 3.14286 1.05492 3.14286H6.68614" stroke="#2F3035" stroke-width="1.5" stroke-miterlimit="10" />
  <path d="M11.7141 3.14286L10.7824 1H7.38178L6.35693 3.14286" stroke="#2F3035" stroke-width="1.5" stroke-miterlimit="10" />
  <path d="M11.7141 3.14282V7.42854L9.10419 5.92274L6.35693 7.42854V3.14282" stroke="#2F3035" stroke-width="1.5" stroke-miterlimit="10" />
  <path d="M10.9864 11.7143H7.1218C6.67898 11.7143 6.35693 11.276 6.35693 10.7889V10.4967C6.35693 9.96102 6.71924 9.57141 7.1218 9.57141H10.9461C11.389 9.57141 11.711 10.0097 11.711 10.4967V10.7889C11.7513 11.3247 11.389 11.7143 10.9864 11.7143Z" stroke="#2F3035" stroke-width="1.5" stroke-miterlimit="10" />
</svg>
    <a href="#">Доставка и оплата</a></li>
                <svg className={styles.header__burger_line}  width="242" height="2" viewBox="0 0 242 2" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 1L242.002 1" stroke="black" stroke-opacity="0.1" />
</svg>
<li><a href="#">Квадроциклы</a></li>
                <svg className={styles.header__burger_line}  width="242" height="2" viewBox="0 0 242 2" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 1L242.002 1" stroke="black" stroke-opacity="0.1" />
</svg>
<li><a href="#">Катера</a></li>
                <svg className={styles.header__burger_line}  width="242" height="2" viewBox="0 0 242 2" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 1L242.002 1" stroke="black" stroke-opacity="0.1" />
</svg>
<li><a href="#">Гидроциклы</a></li>
                <svg className={styles.header__burger_line}  width="242" height="2" viewBox="0 0 242 2" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 1L242.002 1" stroke="black" stroke-opacity="0.1" />
</svg>
<li><a href="#">Лодки</a></li>
                <svg className={styles.header__burger_line}  width="242" height="2" viewBox="0 0 242 2" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 1L242.002 1" stroke="black" stroke-opacity="0.1" />
</svg>
<li><a href="#">Вездеходы</a></li>
                <svg className={styles.header__burger_line}  width="242" height="2" viewBox="0 0 242 2" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 1L242.002 1" stroke="black" stroke-opacity="0.1" />
</svg>
<li><a href="#">Снегоходы</a></li>
                <svg className={styles.header__burger_line}  width="242" height="2" viewBox="0 0 242 2" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 1L242.002 1" stroke="black" stroke-opacity="0.1" />
</svg>
<li><a href="#">Двигатели</a></li>
                <svg className={styles.header__burger_line}  width="242" height="2" viewBox="0 0 242 2" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 1L242.002 1" stroke="black" stroke-opacity="0.1" />
</svg>
<li><a href="#">Запчасти</a></li>
                <svg className={styles.header__burger_line}  width="242" height="2" viewBox="0 0 242 2" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 1L242.002 1" stroke="black" stroke-opacity="0.1" />
</svg>
            </ul>
            <p>Москва, <br/>
            ул. Науки  25</p>
        </div>
    )
}





export default HeaderBurger