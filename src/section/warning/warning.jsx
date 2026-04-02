import WarningStyle from "./warning.module.scss";

function Warning() {
  return (
    <div className={WarningStyle.Warning}>
      {/* <i className={`${WarningStyle.WarningIcon} fa-solid fa-tv`}></i> */}
      <img
        className={WarningStyle.WarningIcon}
        src="https://cdn.vn.garenanow.com/web/fo3/fo4/fo4-manager-book/images/rotate-phone.png"
      />
      <p className={WarningStyle.WarningText}>
        Sorry, my site does not support mobile devices, please rotate your
        screen horizontally or use tablets and laptops
      </p>
    </div>
  );
}

export default Warning;
