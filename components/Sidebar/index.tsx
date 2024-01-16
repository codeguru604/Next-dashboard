import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarLinkGroup from "./SidebarLinkGroup";
import Image from "next/image";

const Sidebar = () => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (key !== "Escape") return;
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className="left-0 top-0 z-9999 flex h-screen w-25 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-bodydark2"
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-4 px-6 py-5.5">
        <Link href="/">
          <Image
            width={57.22}
            height={56}
            src={"/images/logo/logo.svg"}
            alt="Logo"
          />
        </Link>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="px-4">
          {/* <!-- Menu Group --> */}
          <div>
            {/* <!-- Menu Item Dashboard --> */}
            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <Link
                  href="/"
                  className={`group relative flex justify-center gap-2.5 rounded-full py-5 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === "/" ||
                    pathname.includes("dashboard")) &&
                    "bg-graydark dark:bg-meta-4"
                    }`}
                >
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.4159 23.7028H6.29708V5.58396C6.29708 5.19783 5.97035 4.87109 5.58421 4.87109C5.19807 4.87109 4.87134 5.19783 4.87134 5.58396V24.4156C4.87134 24.8018 5.19807 25.1285 5.58421 25.1285H24.4159C24.802 25.1285 25.1288 24.8018 25.1288 24.4156C25.1288 24.0295 24.802 23.7028 24.4159 23.7028Z" fill={`${(pathname === "/" || pathname.includes("dashboard")) ? "#FFFFFF" : "#A0A4AD"}`} />
                    <path d="M13.2177 20.9408V10.6636C13.2177 10.2774 12.891 9.95068 12.5049 9.95068C12.1187 9.95068 11.792 10.2774 11.792 10.6636V20.9705C11.792 21.3566 12.1187 21.6834 12.5049 21.6834C12.891 21.6834 13.2177 21.3566 13.2177 20.9408ZM9.77218 20.9408V10.6636C9.77218 10.2774 9.44545 9.95068 9.05931 9.95068C8.67317 9.95068 8.34644 10.2774 8.34644 10.6636V20.9705C8.34644 21.3566 8.67317 21.6834 9.05931 21.6834C9.44545 21.6537 9.77218 21.3566 9.77218 20.9408ZM20.1385 20.9408V10.6636C20.1385 10.2774 19.8118 9.95068 19.4256 9.95068C19.0395 9.95068 18.7128 10.2774 18.7128 10.6636V20.9705C18.7128 21.3566 19.0395 21.6834 19.4256 21.6834C19.8118 21.6537 20.1385 21.3566 20.1385 20.9408ZM23.5841 20.9408V15.8022C23.5841 15.416 23.2573 15.0893 22.8712 15.0893C22.4851 15.0893 22.1583 15.416 22.1583 15.8022V20.9408C22.1583 21.3269 22.4851 21.6537 22.8712 21.6537C23.2573 21.6537 23.5841 21.3566 23.5841 20.9408ZM16.6633 20.9408V15.8022C16.6633 15.416 16.3365 15.0893 15.9504 15.0893C15.5643 15.0893 15.2375 15.416 15.2375 15.8022V20.9408C15.2375 21.3269 15.5643 21.6537 15.9504 21.6537C16.3365 21.6537 16.6633 21.3566 16.6633 20.9408Z" fill={`${(pathname === "/" || pathname.includes("dashboard")) ? "#FFFFFF" : "#A0A4AD"}`} />
                  </svg>
                </Link>
              </li>
              {/* <!-- Menu Item Dashboard --> */}

              {/* <!-- Menu Item Matter --> */}
              <li>
                <Link
                  href="/tables"
                  className={`group white relative flex justify-center gap-2.5 rounded-full py-5 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("calendar") &&
                    "bg-graydark dark:bg-meta-4"
                    }`}
                >
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_209_65)">
                      <path d="M11.3461 7.13865H11.7469V12.4983C11.7469 12.7491 11.9504 12.9526 12.2011 12.9526H19.6107C19.8614 12.9526 20.0649 12.7491 20.0649 12.4983V7.13865H20.4657C20.6616 7.13865 20.8355 7.01397 20.8969 6.82834C20.9593 6.64272 20.895 6.4374 20.7385 6.32022L16.1982 2.92272C16.036 2.80178 15.8157 2.80084 15.6544 2.92178L11.0747 6.31928C10.9172 6.43647 10.853 6.64084 10.9144 6.8274C10.9763 7.01303 11.1502 7.13865 11.3461 7.13865ZM16.5793 12.0427H15.315V10.4569C15.315 10.1101 15.5996 9.82694 15.9497 9.82694C16.1161 9.82694 16.2727 9.89209 16.3955 10.0135C16.5118 10.1279 16.5797 10.2891 16.5797 10.4565L16.5793 12.0427ZM15.9249 3.85365L19.0997 6.22928H12.7224L15.9249 3.85365ZM12.6563 7.13865H19.1555V12.0432H17.4882V10.4574C17.4882 10.0463 17.3208 9.64787 17.033 9.36803C16.7429 9.07787 16.3585 8.9185 15.9488 8.9185C15.0975 8.9185 14.4052 9.60897 14.4052 10.4574V12.0432H12.6563V7.13865ZM3.09285 15.4543H11.3461C11.5969 15.4543 11.8013 15.2508 11.8013 15.0001C11.8013 14.7493 11.5969 14.5449 11.3461 14.5449H3.09285C2.84207 14.5449 2.6377 14.7493 2.6377 15.0001C2.6377 15.2508 2.84207 15.4543 3.09285 15.4543ZM3.09285 18.6221H11.3461C11.5969 18.6221 11.8013 18.4187 11.8013 18.1669C11.8013 17.9162 11.5969 17.7127 11.3461 17.7127H3.09285C2.84207 17.7127 2.6377 17.9162 2.6377 18.1669C2.6377 18.4187 2.84207 18.6221 3.09285 18.6221ZM11.8013 21.3347C11.8013 21.084 11.5969 20.8805 11.3461 20.8805H3.09285C2.84207 20.8805 2.6377 21.084 2.6377 21.3347C2.6377 21.5865 2.84207 21.7899 3.09285 21.7899H11.3461C11.5969 21.7894 11.8013 21.5865 11.8013 21.3347Z" fill={`${pathname.includes("tables") ? "#FFFFFF" : "#A0A4AD"}`} />
                      <path d="M29.4216 7.58615L28.7887 6.95334C28.0453 6.21084 26.865 6.18084 26.1577 6.88725L23.9437 9.10115V2.03522C23.9437 1.01428 23.1136 0.185059 22.0936 0.185059H8.91C8.90062 0.185059 8.89359 0.188809 8.88422 0.189746C8.84203 0.191621 8.80078 0.19959 8.76047 0.21459C8.74781 0.219277 8.73469 0.22209 8.72297 0.228184C8.67375 0.250215 8.62687 0.27834 8.58844 0.317715L0.132656 8.7735C0.0932812 8.81193 0.0660937 8.8574 0.0440625 8.90615C0.0375 8.91975 0.0342187 8.93475 0.0285937 8.94928C0.0159375 8.98771 0.0084375 9.02615 0.005625 9.06553C0.0046875 9.07537 0 9.08475 0 9.09459V27.9646C0 28.9855 0.829687 29.8147 1.85016 29.8147H22.0936C23.1136 29.8147 23.9437 28.9851 23.9437 27.9646V15.7616L28.3097 11.3957C28.3106 11.3957 28.3106 11.3947 28.3106 11.3947L29.4872 10.2172C30.195 9.51037 30.1659 8.32959 29.4216 7.58615ZM5.00344 5.18803L8.45484 1.73662V7.69865C8.45484 8.21756 8.03297 8.6399 7.51359 8.6399H1.55203L5.00344 5.18803ZM23.0348 27.9646C23.0348 28.4835 22.613 28.9058 22.0936 28.9058H1.85016C1.33125 28.9058 0.908906 28.484 0.908906 27.9646V9.54881H7.51359C8.53359 9.54881 9.36375 8.71912 9.36375 7.69865V1.09303H22.0931C22.612 1.09303 23.0344 1.51584 23.0344 2.03522V10.0105L12.7706 20.2752C12.7167 20.3282 12.6773 20.3952 12.6553 20.4683L11.5355 24.2751C11.4886 24.4344 11.5327 24.6074 11.6498 24.7246C11.7361 24.8118 11.8523 24.8582 11.9714 24.8582C12.0145 24.8582 12.0577 24.8516 12.0994 24.839L15.907 23.7191C15.9802 23.698 16.0462 23.6587 16.1002 23.6047L23.0344 16.6705L23.0348 27.9646ZM13.3889 21.1982L15.1767 22.9869L12.6436 23.7322L13.3889 21.1982ZM23.1722 15.2479C23.1694 15.2497 23.1675 15.2526 23.1647 15.2544L15.9473 22.4722L13.9031 20.4271L25.3012 9.02896L26.0025 9.73022L23.6494 12.0824C23.4717 12.2601 23.4717 12.5483 23.6494 12.7251C23.738 12.8137 23.8547 12.8587 23.9709 12.8587C24.0872 12.8587 24.2034 12.8137 24.2925 12.7251L26.6456 10.3729L27.3459 11.0741L23.1722 15.2479ZM28.8445 9.57459L27.9886 10.4315L25.9444 8.38631L26.8003 7.53037C27.1528 7.17787 27.757 7.2074 28.1461 7.59646L28.7789 8.22928C29.168 8.61787 29.198 9.22209 28.8445 9.57459Z" fill={`${pathname.includes("tables") ? "#FFFFFF" : "#A0A4AD"}`} />
                    </g>
                    <defs>
                      <clipPath id="clip0_209_65">
                        <rect width="30" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </li>
              {/* <!-- Menu Item Matter --> */}

              {/* <!-- Menu Item --> */}
              <li>
                <Link
                  href="#"
                  className={`group relative flex justify-center gap-2.5 rounded-full py-5 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("profile") && "bg-graydark dark:bg-meta-4"
                    }`}
                >
                  <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.3981 17.7859C25.4001 17.7744 25.4024 17.7629 25.4043 17.7514L25.4081 17.7289L25.4099 17.7061C25.4169 17.6183 25.5776 15.5254 25.204 12.8253C24.9838 11.2338 24.6222 9.76258 24.129 8.45242C23.5057 6.79627 22.6688 5.39234 21.6416 4.27965C20.4245 2.96132 18.9416 2.04656 17.2116 1.54039C16.5381 0.852946 15.3976 0 13.8858 0C12.4055 0 11.1783 0.824114 10.4228 1.49707C8.62896 1.99375 7.09638 2.92367 5.84453 4.27965C4.8173 5.39234 3.98041 6.79627 3.35705 8.45242C2.86394 9.76258 2.50225 11.2338 2.28208 12.8253C1.99854 14.8747 2.02277 16.5741 2.05399 17.3126C1.56095 17.5451 0.733948 18.051 0.293825 18.969C-0.109008 19.8092 -0.0975887 20.7808 0.327832 21.8568L0.345388 21.9012L0.370545 21.9418C0.404159 21.9961 1.21718 23.2905 3.2287 24.9276C4.3968 25.8783 5.73537 26.754 7.20721 27.5303C9.03993 28.497 11.0866 29.3121 13.2903 29.953L13.4519 30L13.6113 29.946C13.6443 29.9349 16.9489 28.8116 20.2357 27.246C22.1812 26.3193 23.7453 25.4187 24.8847 24.5691C26.377 23.4563 27.1547 22.4301 27.2581 21.4359C27.4345 20.987 27.7635 19.5013 25.3981 17.7859ZM16.6898 2.55784C16.1773 2.86622 15.2107 3.31462 13.9228 3.31462C12.9294 3.31462 11.9091 3.05231 10.8823 2.53393C11.4594 1.96224 12.5705 1.07051 13.8858 1.07051C15.2131 1.07051 16.2119 2.00196 16.6898 2.55784ZM3.34249 12.972C3.66943 10.6088 4.50539 7.30837 6.6311 5.00581C7.44508 4.1241 8.39701 3.44519 9.47901 2.96959L9.75767 3.13592C11.1467 3.96481 12.548 4.38513 13.9228 4.38513C16.2966 4.38513 17.7473 3.13131 17.8079 3.07797L17.9561 2.94747C19.058 3.42342 20.0262 4.10887 20.8524 5.00303C22.9745 7.29973 23.8116 10.5907 24.1401 12.9471C24.4811 15.3924 24.3603 17.3688 24.3444 17.5986C24.0032 19.522 21.1997 20.7424 18.9027 21.4285C16.4982 22.1466 14.1301 22.4337 13.7431 22.4775C13.3561 22.4337 10.9879 22.1466 8.58339 21.4285C6.28643 20.7424 3.48284 19.5219 3.14167 17.5984C3.12568 17.369 3.00489 15.4122 3.34249 12.972ZM26.2647 21.0406L26.206 21.126L26.1976 21.2724C26.1706 21.7403 25.8104 22.5428 24.2477 23.7088C23.1656 24.5161 21.6636 25.3797 19.7833 26.2758C16.9589 27.6217 14.1177 28.6362 13.4265 28.8773C8.72591 27.4863 5.68402 25.5361 3.95393 24.1375C2.24287 22.7542 1.44687 21.6267 1.30432 21.4142C1.01249 20.6506 0.996151 19.9863 1.25579 19.439C1.49251 18.9399 1.92096 18.6093 2.26192 18.4117C2.90822 20.098 4.93134 21.4572 8.29121 22.4584C11.0023 23.2664 13.58 23.5373 13.6884 23.5485L13.7431 23.5541L13.7978 23.5485C13.9062 23.5373 16.4839 23.2664 19.195 22.4584C22.2624 21.5443 24.2156 20.3318 25.0242 18.8445C25.844 19.4922 26.1503 20.0309 26.2579 20.3906C26.3688 20.7617 26.2848 20.9936 26.2647 21.0406Z" fill="#A0A4AD" />
                    <path d="M9.38003 17.314C9.4565 18.0185 9.24429 18.6345 9.24279 18.6388L8.92064 19.5361L9.85448 19.3438C10.0374 19.3062 10.2212 19.2871 10.4008 19.2871C12.0971 19.2871 13.1794 20.9971 13.1976 21.0264L13.7715 21.9665L14.1556 20.933C14.5423 19.8925 15.3386 19.365 16.5225 19.365C17.0472 19.365 17.4459 19.4759 17.4483 19.4765L18.5277 19.7886L18.0899 18.7538C17.8453 18.1758 18.0209 17.4767 18.6117 16.6758C19.105 16.0071 19.7042 15.5353 19.7097 15.531L20.468 14.9412L19.5675 14.6067C17.5866 13.871 18.3579 11.382 18.3913 11.2777L18.7356 10.2203L17.6944 10.6108C17.3916 10.7243 17.1051 10.7819 16.8431 10.7819C16.3682 10.7819 16.0653 10.5913 15.9176 10.4662C15.8885 9.00111 15.5628 7.84196 14.9482 7.01827C14.4295 6.32315 13.8822 6.1275 13.8215 6.10745L13.5609 6.02148L13.339 6.18288C11.7116 7.36644 11.6009 9.5714 11.622 10.4084C11.256 10.6105 10.8522 10.6575 10.5555 10.6575H10.5554C10.2077 10.6575 9.95428 10.5943 9.954 10.5942L9.04043 10.3539L9.30381 11.2611C9.82953 13.072 7.81833 14.5129 7.79899 14.5266L6.98926 15.0909L7.90394 15.4618C8.80145 15.8257 9.28425 16.4315 9.38003 17.314ZM9.63256 14.187C10.2197 13.3938 10.4994 12.556 10.4601 11.727C10.4912 11.7278 10.523 11.7282 10.5553 11.7282C10.5554 11.7282 10.5554 11.7282 10.5555 11.7282C11.3108 11.7282 11.9846 11.5126 12.5037 11.1047L12.7344 10.9223L12.7055 10.6301C12.7032 10.6068 12.5045 8.42956 13.7113 7.26485C13.8323 7.35848 13.9868 7.50625 14.1431 7.73216C14.4652 8.19772 14.8493 9.08775 14.8493 10.6838V10.859L14.9529 11.0003C15.185 11.3168 15.8443 11.8525 16.8431 11.8525C16.957 11.8525 17.0727 11.8457 17.1901 11.832C17.1552 12.1168 17.1363 12.4498 17.1611 12.8001C17.237 13.8733 17.6788 14.6994 18.4509 15.2292C17.8018 15.8819 16.869 17.0458 16.913 18.3102C16.7914 18.3005 16.6603 18.2946 16.5225 18.2946C15.2214 18.2946 14.1963 18.8069 13.5594 19.7564C12.9592 19.1001 11.8877 18.2271 10.4272 18.2167C10.4645 17.9364 10.4834 17.6005 10.4488 17.2426C10.3766 16.4963 10.0623 15.5382 9.04803 14.8588C9.23333 14.6753 9.43826 14.4495 9.63256 14.187Z" fill="#A0A4AD" />
                    <path d="M13.6538 18.2845C15.4444 18.2845 16.901 16.8278 16.901 15.0373C16.901 13.2468 15.4444 11.79 13.6538 11.79C11.8633 11.79 10.4066 13.2467 10.4066 15.0373C10.4066 16.8278 11.8633 18.2845 13.6538 18.2845ZM13.6538 12.8606C14.8541 12.8606 15.8305 13.837 15.8305 15.0373C15.8305 16.2375 14.8541 17.214 13.6538 17.214C12.4536 17.214 11.4771 16.2375 11.4771 15.0373C11.4771 13.837 12.4536 12.8606 13.6538 12.8606Z" fill="#A0A4AD" />
                    <path d="M19.1776 24.5194L13.6572 26.7895L8.31422 24.5217C8.04216 24.4061 7.7279 24.5332 7.61239 24.8053C7.49688 25.0774 7.62385 25.3917 7.89597 25.5071L13.4448 27.8622C13.5116 27.8906 13.5827 27.9048 13.6539 27.9048C13.723 27.9048 13.7922 27.8914 13.8575 27.8646L19.5847 25.5094C19.8581 25.397 19.9886 25.0842 19.8762 24.8108C19.7637 24.5375 19.4511 24.407 19.1776 24.5194Z" fill="#A0A4AD" />
                  </svg>
                </Link>
              </li>
              {/* <!-- Menu Item --> */}

              {/* <!-- Menu Item --> */}
              <li>
                <Link
                  href="#"
                  className={`group relative flex justify-center gap-2.5 rounded-full py-5 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("profile") && "bg-graydark dark:bg-meta-4"
                    }`}
                >
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_208_17)">
                      <path d="M13.25 4.25V15.75H4.25V4.25H13.25ZM13.25 19.25V25.75H4.25V19.25H13.25ZM25.75 14.25V25.75H16.75V14.25H25.75ZM25.75 10.75H16.75V4.25H25.75V10.75Z" stroke="#A0A4AD" />
                    </g>
                    <defs>
                      <clipPath id="clip0_208_17">
                        <rect width="30" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </li>
              {/* <!-- Menu Item --> */}
              {/* <!-- Menu Item --> */}
              <li>
                <Link
                  href="#"
                  className={`group relative flex justify-center gap-2.5 rounded-full py-5 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("profile") && "bg-graydark dark:bg-meta-4"
                    }`}
                >
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.6006 23.4199C25.969 21.9239 25.0524 20.5649 23.9019 19.4188C22.755 18.2694 21.3962 17.353 19.9008 16.7201C19.8874 16.7135 19.874 16.7101 19.8606 16.7034C21.9466 15.1967 23.3026 12.7425 23.3026 9.97349C23.3026 5.38644 19.5861 1.66992 14.999 1.66992C10.412 1.66992 6.69547 5.38644 6.69547 9.97349C6.69547 12.7425 8.05149 15.1967 10.1374 16.7068C10.124 16.7135 10.1106 16.7168 10.0973 16.7235C8.59725 17.3563 7.25127 18.2637 6.09614 19.4222C4.94673 20.5691 4.0303 21.9279 3.39747 23.4233C2.77579 24.8873 2.44049 26.4569 2.40975 28.0472C2.40886 28.0829 2.41513 28.1184 2.42819 28.1517C2.44125 28.185 2.46084 28.2153 2.4858 28.2409C2.51076 28.2665 2.54059 28.2868 2.57353 28.3007C2.60648 28.3146 2.64186 28.3217 2.67761 28.3217H4.68654C4.83386 28.3217 4.95105 28.2045 4.95439 28.0606C5.02136 25.4757 6.0593 23.055 7.89413 21.2201C9.79256 19.3217 12.3138 18.2771 14.999 18.2771C17.6843 18.2771 20.2055 19.3217 22.1039 21.2201C23.9388 23.055 24.9767 25.4757 25.0437 28.0606C25.047 28.2079 25.1642 28.3217 25.3115 28.3217H27.3205C27.3562 28.3217 27.3916 28.3146 27.4245 28.3007C27.4575 28.2868 27.4873 28.2665 27.5123 28.2409C27.5372 28.2153 27.5568 28.185 27.5699 28.1517C27.5829 28.1184 27.5892 28.0829 27.5883 28.0472C27.5548 26.4467 27.2234 24.8898 26.6006 23.4199ZM14.999 15.7324C13.4622 15.7324 12.0158 15.1331 10.9276 14.0449C9.83944 12.9568 9.24011 11.5103 9.24011 9.97349C9.24011 8.43666 9.83944 6.99024 10.9276 5.90207C12.0158 4.8139 13.4622 4.21457 14.999 4.21457C16.5359 4.21457 17.9823 4.8139 19.0705 5.90207C20.1586 6.99024 20.758 8.43666 20.758 9.97349C20.758 11.5103 20.1586 12.9568 19.0705 14.0449C17.9823 15.1331 16.5359 15.7324 14.999 15.7324Z" fill="#A0A4AD" />
                  </svg>
                </Link>
              </li>
              {/* <!-- Menu Item --> */}
              {/* <!-- Menu Item --> */}
              <li>
                <Link
                  href="#"
                  className={`group relative flex justify-center gap-2.5 rounded-full py-5 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("profile") && "bg-graydark dark:bg-meta-4"
                    }`}
                >
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.7234 23.702H25.0448V21.0234C25.0448 20.8761 24.9242 20.7555 24.7769 20.7555H23.1698C23.0225 20.7555 22.9019 20.8761 22.9019 21.0234V23.702H20.2234C20.076 23.702 19.9555 23.8225 19.9555 23.9698V25.577C19.9555 25.7243 20.076 25.8448 20.2234 25.8448H22.9019V28.5234C22.9019 28.6707 23.0225 28.7912 23.1698 28.7912H24.7769C24.9242 28.7912 25.0448 28.6707 25.0448 28.5234V25.8448H27.7234C27.8707 25.8448 27.9912 25.7243 27.9912 25.577V23.9698C27.9912 23.8225 27.8707 23.702 27.7234 23.702ZM10.3629 14.5412C10.3327 14.2499 10.316 13.9553 10.316 13.6573C10.316 13.1249 10.3662 12.606 10.46 12.1004C10.4834 11.9799 10.4198 11.856 10.3093 11.8058C9.85393 11.6015 9.4354 11.3203 9.0738 10.9654C8.6477 10.5522 8.31241 10.0548 8.0893 9.5048C7.8662 8.95483 7.76019 8.36439 7.77804 7.77115C7.80817 6.69638 8.24009 5.67517 8.99344 4.90508C9.82045 4.05798 10.9321 3.59593 12.114 3.60932C13.1821 3.61937 14.2133 4.0312 14.9934 4.76111C15.2579 5.00888 15.4856 5.28343 15.6765 5.57807C15.7434 5.68187 15.874 5.7254 15.9879 5.68522C16.5771 5.48098 17.1999 5.337 17.8394 5.27004C18.0269 5.24995 18.1341 5.04906 18.0504 4.88164C16.9622 2.72874 14.739 1.24214 12.1675 1.20196C8.45773 1.14504 5.36398 4.18857 5.36398 7.89839C5.36398 10.0011 6.33161 11.8761 7.84835 13.1049C6.78362 13.597 5.80259 14.2767 4.95215 15.1272C3.11732 16.9587 2.07938 19.3761 2.01241 21.9575C2.01152 21.9933 2.01779 22.0288 2.03085 22.0621C2.04391 22.0954 2.0635 22.1257 2.08846 22.1513C2.11342 22.1769 2.14325 22.1972 2.17619 22.2111C2.20914 22.225 2.24452 22.2321 2.28027 22.2321H4.15862C4.30259 22.2321 4.42313 22.1183 4.42648 21.9743C4.49009 20.0323 5.27692 18.2142 6.65973 16.8348C7.64411 15.8504 8.84947 15.1674 10.1653 14.8359C10.2925 14.7991 10.3796 14.6752 10.3629 14.5412ZM25.4466 13.6573C25.4466 9.99437 22.5035 7.01781 18.8539 6.96089C15.1441 6.90397 12.0537 9.94749 12.0537 13.6573C12.0537 15.76 13.0247 17.635 14.5381 18.8638C13.4623 19.3624 12.483 20.0471 11.6452 20.8861C9.8104 22.7176 8.77246 25.135 8.70549 27.7131C8.7046 27.7489 8.71087 27.7844 8.72393 27.8177C8.73699 27.851 8.75658 27.8813 8.78154 27.9069C8.8065 27.9325 8.83633 27.9528 8.86928 27.9667C8.90222 27.9805 8.9376 27.9877 8.97335 27.9877H10.8484C10.9923 27.9877 11.1129 27.8738 11.1162 27.7299C11.1798 25.7879 11.9667 23.9698 13.3495 22.5904C14.7925 21.1473 16.7077 20.3537 18.7501 20.3537C22.4466 20.3537 25.4466 17.3571 25.4466 13.6573ZM21.7803 16.6875C20.97 17.4977 19.8952 17.943 18.7501 17.943C17.605 17.943 16.5303 17.4977 15.72 16.6875C15.3157 16.2852 14.9962 15.8059 14.7805 15.2779C14.5648 14.75 14.4574 14.1841 14.4644 13.6138C14.4745 12.5156 14.9131 11.4542 15.6798 10.6674C16.4834 9.8437 17.5582 9.38499 18.7066 9.3716C19.8417 9.36156 20.9432 9.80352 21.7535 10.597C22.5838 11.4107 23.0392 12.4988 23.0392 13.6573C23.0359 14.8024 22.5905 15.8772 21.7803 16.6875Z" fill="#A0A4AD" />
                  </svg>
                </Link>
              </li>
              {/* <!-- Menu Item --> */}
              {/* <!-- Menu Item --> */}
              <li>
                <Link
                  href="#"
                  className={`group relative flex justify-center gap-2.5 rounded-full py-5 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("profile") && "bg-graydark dark:bg-meta-4"
                    }`}
                >
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_326_1600)">
                      <path d="M26.7852 15.1977H14.7986V3.21112C14.7986 3.0638 14.6781 2.94326 14.5307 2.94326H13.6602C11.9014 2.94038 10.1594 3.2853 8.53435 3.95818C6.90933 4.63106 5.43339 5.61861 4.19146 6.86402C2.96839 8.08331 1.99386 9.52861 1.32204 11.1196C0.622952 12.7697 0.264223 14.544 0.267354 16.3361C0.264474 18.0949 0.609395 19.837 1.28227 21.462C1.95515 23.087 2.9427 24.5629 4.18811 25.8049C5.41691 27.0337 6.84994 28.0013 8.4437 28.6743C10.0938 29.3734 11.8681 29.7321 13.6602 29.729C15.419 29.7319 17.1611 29.3869 18.7861 28.7141C20.4111 28.0412 21.887 27.0536 23.129 25.8082C24.3578 24.5794 25.3254 23.1464 25.9984 21.5526C26.6975 19.9025 27.0562 18.1282 27.0531 16.3361V15.4656C27.0531 15.3183 26.9325 15.1977 26.7852 15.1977ZM21.485 24.2312C20.4482 25.2599 19.2186 26.0739 17.8667 26.6266C16.5148 27.1794 15.0671 27.4599 13.6066 27.4522C10.6569 27.4388 7.88454 26.2837 5.7986 24.1977C3.69927 22.0984 2.54414 19.306 2.54414 16.3361C2.54414 13.3663 3.69927 10.5738 5.7986 8.47451C7.62673 6.64639 9.98053 5.53143 12.5218 5.27697V17.4745H24.7194C24.4616 20.0292 23.3366 22.3964 21.485 24.2312ZM29.7316 13.3361L29.6446 12.3919C29.36 9.30822 27.9906 6.39862 25.7874 4.20219C23.5828 2.00173 20.6792 0.639908 17.5776 0.351742L16.6301 0.264689C16.4727 0.251296 16.3388 0.371832 16.3388 0.529198V13.3897C16.3388 13.537 16.4593 13.6575 16.6066 13.6575L29.4638 13.6241C29.6212 13.6241 29.745 13.4901 29.7316 13.3361ZM18.6089 11.3875V2.79594C20.718 3.23739 22.6536 4.28193 24.1803 5.80264C25.7104 7.32942 26.7584 9.27139 27.1937 11.364L18.6089 11.3875Z" fill="#A0A4AD" />
                    </g>
                    <defs>
                      <clipPath id="clip0_326_1600">
                        <rect width="30" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                </Link>
              </li>
              {/* <!-- Menu Item --> */}
            </ul>
            <Link
              href="#"
              className={`absolute block bottom-10 bg-noti-alt flex justify-center gap-2.5 rounded-full py-4 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("profile") && "bg-graydark dark:bg-meta-4"
                }`}
            >
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_208_32)">
                  <path d="M2.5 11.2425C2.49934 10.2578 2.69294 9.28256 3.06971 8.37274C3.44648 7.46292 3.99902 6.63636 4.69569 5.94039C5.39236 5.24442 6.21947 4.69271 7.12967 4.31685C8.03986 3.94099 9.01526 3.74837 10 3.75001H20C24.1413 3.75001 27.5 7.11876 27.5 11.2425V26.25H10C5.85875 26.25 2.5 22.8813 2.5 18.7575V11.2425ZM25 23.75V11.2425C24.9967 9.91814 24.4686 8.64906 23.5314 7.71328C22.5943 6.77751 21.3244 6.25133 20 6.25001H10C9.34356 6.24836 8.69325 6.37632 8.08637 6.62654C7.47949 6.87676 6.92798 7.24433 6.46345 7.70815C5.99893 8.17198 5.63054 8.72294 5.37941 9.32945C5.12827 9.93595 4.99934 10.5861 5 11.2425V18.7575C5.00331 20.0819 5.53139 21.351 6.46857 22.2867C7.40576 23.2225 8.67562 23.7487 10 23.75H25ZM17.5 13.75H20V16.25H17.5V13.75ZM10 13.75H12.5V16.25H10V13.75Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_208_32">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>

            </Link>
          </div>
          {/* <!-- Menu Group --> */}
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;