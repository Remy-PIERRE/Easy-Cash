window.addEventListener("load", initApp);

// DEV //

function initApp() {
	handleMenuMobile();
	handleCategoryDropDown();
}

// MENU MOBILE //
function handleMenuMobile() {
	// opening - closing menu mobile with nav button //
	const menuMobileButton = document.querySelector("#menuMobileButton");
	menuMobileButton.addEventListener("click", handleMenuMobileButtonClick);

	// closing menu mobile with cross button //
	const menuMobileCross = document.querySelector("#menuMobileCross");
	menuMobileCross.addEventListener("click", closeMenuMobile);
}

function handleMenuMobileButtonClick() {
	const menuMobileContainer = document.querySelector("#menuMobileContainer");
	if (menuMobileContainer.classList.contains("opened")) closeMenuMobile();
	else openMenuMobile();
}

function openMenuMobile() {
	const menuMobileContainer = document.querySelector("#menuMobileContainer");
	if (!menuMobileContainer.classList.contains("opened"))
		menuMobileContainer.classList.toggle("opened");
}

function closeMenuMobile() {
	const menuMobileContainer = document.querySelector("#menuMobileContainer");
	if (menuMobileContainer.classList.contains("opened"))
		menuMobileContainer.classList.toggle("opened");
}

// CATEGORY DROPDOWN //
function handleCategoryDropDown() {
	// this button exists not on all pages - checking if true //
	const dropDownButton = document.querySelector("#dropDownButton");
	if (dropDownButton) dropDownButton.addEventListener("click", handleDropDown);
}

function handleDropDown() {
	const dropDownArticle = document.querySelector("#dropDownArticle");
	if (dropDownArticle.classList.contains("opened")) closeDropDownArticle();
	else openDropDownArticle();
}

function openDropDownArticle() {
	const dropDownArticle = document.querySelector("#dropDownArticle");
	const dropDownButton = document.querySelector("#dropDownButton");

	if (!dropDownArticle.classList.contains("opened"))
		dropDownArticle.classList.toggle("opened");

	dropDownButton.innerHTML = `Cacher`;
}

function closeDropDownArticle() {
	const dropDownArticle = document.querySelector("#dropDownArticle");
	const dropDownButton = document.querySelector("#dropDownButton");

	if (dropDownArticle.classList.contains("opened"))
		dropDownArticle.classList.toggle("opened");

	dropDownButton.innerHTML = `Lire la suite`;
}
