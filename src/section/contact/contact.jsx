import { useRef, useState } from "react";
import styleContact from "./contact.module.scss";
import { mySocials, inforContacts } from "./dataContact";
import contactImg from "../../assets/image/contact.png";

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ sending: false, ok: null, msg: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus({ sending: true, ok: null, msg: "" });

    try {
      const res = await fetch("https://formspree.io/f/mzzawokv", {
        method: "POST",
        body: new FormData(formRef.current),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        formRef.current.reset();
        setStatus({
          sending: false,
          ok: true,
          msg: "Đã gửi! Mình sẽ phản hồi sớm.",
        });
      } else {
        const err = await res.json().catch(() => ({}));
        setStatus({
          sending: false,
          ok: false,
          msg: err?.errors?.[0]?.message || "Gửi thất bại, vui lòng thử lại.",
        });
      }
    } catch (err) {
      setStatus({
        sending: false,
        ok: false,
        msg: "Có lỗi kết nối, thử lại nhé.",
      });
    }
  };

  return (
    <div id="contact" className={`${styleContact.contact}`}>
      <div className={`${styleContact.contactContain}`}>
        <div className={styleContact.contactSocial}>
          {/* GIỮ NGUYÊN CSS – chỉ thêm ref, action, method, onSubmit và name cho input */}
          <form
            ref={formRef}
            className={styleContact.contactFormSocial}
            action="https://formspree.io/f/mzzawokv"
            method="POST"
            onSubmit={onSubmit}
          >
            <div className={styleContact.contactYourInfor}>
              <input
                className={styleContact.contactYourName}
                name="lastName"
                placeholder="Last Name"
                required
              />
              <input
                className={styleContact.contactYourName}
                name="firstName"
                placeholder="First Name"
                required
              />
            </div>

            <input
              className={styleContact.contactYourEmail}
              type="email"
              name="email"
              placeholder="Email"
              required
            />

            <textarea
              className={styleContact.contactYourMess}
              name="message"
              placeholder="Your message..."
              required
              maxLength={2000}
            />

            {/* Tùy chọn: subject hiển thị trong email */}
            <input
              type="hidden"
              name="_subject"
              value="New message from Portfolio"
            />

            {/* Honeypot chống bot */}
            <input
              type="text"
              name="_gotcha"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <button
              type="submit"
              className={styleContact.contactBtnSubmit}
              disabled={status.sending}
            >
              {status.sending ? "Sending..." : "Send Message"}
            </button>

            {/* Thông báo trạng thái gửi */}
            {status.ok === true && (
              <small
                style={{ display: "block", marginTop: 8, color: "#4ade80" }}
              >
                {status.msg}
              </small>
            )}
            {status.ok === false && (
              <small
                style={{ display: "block", marginTop: 8, color: "#f87171" }}
              >
                {status.msg}
              </small>
            )}
          </form>
        </div>

        <div className={styleContact.contactMysocial}>
          <img
            className={styleContact.contactMysocialImg}
            src={contactImg}
            alt="Contact"
          />
          <h2 className={styleContact.contactMysocialHead}>Contact me</h2>
          <p className={styleContact.contactMysocialText}>
            Feel free to reach out to me anytime. I am here to answer your
            questions, listen to your feedback, and provide the support you
            need. Your satisfaction is my priority, and I am always ready to
            help.
          </p>

          <nav className={styleContact.contactMysocialList}>
            {inforContacts.map((inforContact) => (
              <li
                key={inforContact.id}
                className={styleContact.contactMysocialItem}
              >
                <i
                  className={`${inforContact.icon} ${styleContact.contactMysocialIcon}`}
                ></i>
                {inforContact.infor}
              </li>
            ))}
          </nav>

          <nav className={styleContact.contactMysocialIcons}>
            {mySocials.map((mySocial) => (
              <li
                className={styleContact.contactMysocialIconsItem}
                key={mySocial.id}
              >
                <a
                  className={styleContact.contactMysocialIconLink}
                  href={mySocial.link}
                >
                  <i
                    className={`${mySocial.icon} ${styleContact.contactMysocialLinkicon}`}
                  ></i>
                </a>
              </li>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Contact;
