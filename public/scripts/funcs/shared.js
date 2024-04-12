import { getMe } from "./auth.js";
import { isLogin, getUrlParam, getToken, showSwal } from "./utils.js";
const showUserNameInNavbar = () => {
  const navbarProfileBox = document.querySelector(".main-header__profile");
  const isUserLogin = isLogin();

  if (isUserLogin) {
    const userInfos = getMe().then((data) => {
      navbarProfileBox.setAttribute("href", "my-account/Account/");
      navbarProfileBox.innerHTML = `<span class="main-header__profile-text">${data.name}</span>`;
    });
  } else {
    navbarProfileBox.setAttribute("href", "login.html");
    navbarProfileBox.innerHTML =
      '<span class="main-header__profile-text">ثبت نام / ورود</span> ';
  }
};
const globalSearch = async () => {
  const searchValue = getUrlParam("value");
  const coursesSearchResultWrapper =
    document.querySelector("#courses-container");
  const articlesSearchResultWrapper =
    document.querySelector("#articles-wrapper");

  const res = await fetch(`http://localhost:4000/v1/search/${searchValue}`);
  const data = await res.json();

  if (data.allResultCourses.length) {
    data.allResultCourses.forEach((course) => {
      coursesSearchResultWrapper.insertAdjacentHTML(
        "beforeend",
        `
      <div class="col-4">
        <div class="course-box">
          <a href="course.html?name=${course.shortName}">
            <img src=http://localhost:4000/courses/covers/${
              course.cover
            } alt="Course img" class="course-box__img" />
          </a>
          <div class="course-box__main">
            <a href="course.html?name=${
              course.shortName
            }" class="course-box__title">${course.name}</a>

            <div class="course-box__rating-teacher">
              <div class="course-box__teacher">
                <i class="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
                <a href="#" class="course-box__teacher-link">محمدامین سعیدی راد</a>
              </div>
              <div class="course-box__rating">
                <img src="images/svgs/star_fill.svg" alt="rating" class="course-box__star">
                <img src="images/svgs/star_fill.svg" alt="rating" class="course-box__star">
                <img src="images/svgs/star_fill.svg" alt="rating" class="course-box__star">
                <img src="images/svgs/star_fill.svg" alt="rating" class="course-box__star">
                <img src="images/svgs/star_fill.svg" alt="rating" class="course-box__star">
              </div>
            </div>

            <div class="course-box__status">
              <div class="course-box__users">
                <i class="fas fa-users course-box__users-icon"></i>
                <span class="course-box__users-text">${course.registers}</span>
              </div>
              <span class="course-box__price">${
                course.price === 0 ? "رایگان" : course.price.toLocaleString()
              }</span>
            </div>
          </div>

          <div class="course-box__footer">
            <a href="#" class="course-box__footer-link">
              مشاهده اطلاعات
              <i class="fas fa-arrow-left course-box__footer-icon"></i>
            </a>
          </div>

        </div>
      </div>
    `
      );
    });
  } else {
    coursesSearchResultWrapper.insertAdjacentHTML(
      "beforeend",
      `
      <div class="alert alert-danger">هیچ دوره‌ای برای جستجوی شما وجود ندارد</div>
    `
    );
  }

  if (data.allResultArticles.length) {
    data.allResultArticles.forEach((article) => {
      articlesSearchResultWrapper.insertAdjacentHTML(
        "beforeend",
        `
            <div class="col-4">
              <div class="article-card">
                <div class="article-card__header">
                  <a href="#" class="article-card__link-img">
                    <img src=http://localhost:4000/courses/covers/${article.cover} class="article-card__img" alt="Article Cover" />
                  </a>
                </div>
                <div class="article-card__content">
                  <a href="#" class="article-card__link">
                    ${article.title}
                  </a>
                  <p class="article-card__text">
                  ${article.description}
                  </p>
                  <a href="#" class="article-card__btn">بیشتر بخوانید</a>
                </div>
              </div>
            </div>
      `
      );
    });
  } else {
    articlesSearchResultWrapper.insertAdjacentHTML(
      "beforeend",
      `
      <div class="alert alert-danger">هیچ مقاله‌ای برای جستجوی شما وجود ندارد</div>
    `
    );
  }

  return data;
};
export {
  showUserNameInNavbar,
  globalSearch,
};
