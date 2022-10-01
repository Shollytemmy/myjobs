import * as React from "react"

const Logo = (props) => (
  <svg
    width={235}
    height={235}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <rect
        x={21}
        y={21}
        width={193}
        height={193}
        rx={12.867}
        fill="#fff"
        shapeRendering="crispEdges"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M105.033 42.836v3.594h-3.22c-4.179 0-8.304 1.757-9.92 4.225-1.56 2.379-2.428 9.082-1.493 11.529.652 1.71 1.162 1.482 13.68-6.149l13.002-7.926 12.143 7.47c6.68 4.107 12.415 7.302 12.744 7.099.91-.562.631-6.716-.444-9.784-1.325-3.779-4.233-5.666-9.586-6.218l-4.545-.47v-7.194l5.841.441c6.674.505 11.132 2.122 14.395 5.222 4.906 4.66 5.767 8.936 4.136 20.547-1.409 10.042-1.555 17.407-.389 19.586 1.012 1.891 4.196 3.56 8.162 4.278 2.847.515 2.994.693 2.994 3.61 0 3.039-.034 3.072-3.724 3.626-2.528.379-4.45 1.285-5.989 2.824-1.989 1.99-2.266 2.856-2.266 7.095 0 2.656.563 8.62 1.252 13.253 1.556 10.478.739 15.767-3.115 20.157-3.746 4.265-8.176 5.896-17.402 6.405l-7.888.434-.012-10.299c-.007-5.664-.278-10.716-.603-11.226-.339-.532-3.233-1.044-6.778-1.198l-6.188-.27-.003 5.99c-.002 3.294-.237 8.46-.522 11.481l-.519 5.491-7.661-.386c-8.619-.434-12.735-1.817-16.632-5.589-4.104-3.971-5.385-9.926-4.083-18.982 1.865-12.977 2.096-16.14 1.374-18.759-.972-3.52-3.898-5.783-8.343-6.45-3.478-.52-3.538-.58-3.538-3.597 0-2.917.148-3.095 2.995-3.61 4.114-.745 7.16-2.404 8.29-4.515 1.266-2.367 1.119-8.75-.444-19.175-.708-4.723-1.1-9.486-.872-10.582l.824-3.977c.516-2.486 4.697-7.31 7.668-8.847 3.148-1.629 7.572-2.573 12.486-2.668l4.193-.08v3.594Zm-.569 23.01-12.148 7.338-.03 4.423c-.043 6.163-2.58 10.936-7.048 13.26l-3.423 1.78 2.833 1.345c7.196 3.415 8.532 8.435 6.425 24.123-1.358 10.107-1.36 10.762-.023 14.259 1.131 2.963 2.034 3.954 4.696 5.164 1.814.824 3.713 1.505 4.222 1.515.648.012 1.007-3.545 1.198-11.897.15-6.552.453-12.048.672-12.211.22-.163 6.959-.158 14.974.012l14.575.309v6.993c0 3.846.233 9.227.519 11.959.499 4.78.592 4.947 2.479 4.474 3.523-.885 5.681-2.883 7.086-6.564 1.314-3.442 1.311-4.131-.075-14.139-.911-6.581-1.246-11.93-.893-14.283.689-4.59 3.576-8.247 8.008-10.14l3.241-1.385-2.574-.573c-5.678-1.263-8.992-6.887-9.001-15.273l-.005-4.038-11.481-6.944c-6.314-3.819-11.615-6.921-11.78-6.895-.164.027-5.765 3.351-12.447 7.387Z"
        fill="#FF6B01"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M105.968 88.484c1.658 1.5 1.934 5.072.502 6.504-.527.528-2.072.959-3.434.959-3.052 0-4.392-1.25-4.392-4.096 0-4.16 4.276-6.126 7.324-3.367Zm28.169.453c1.652 2.36 1.568 4.072-.284 5.748-2.176 1.97-5.735 1.354-7.185-1.242-1.053-1.885-1.033-2.322.193-4.193 1.768-2.698 5.493-2.859 7.276-.313ZM109.732 173.496c1.093.765 1.326 2.412.462 3.276-1.225 1.225-4.433.184-4.433-1.439 0-1.039 1.376-2.304 2.727-2.506.131-.019.691.281 1.244.669Zm8.892-.264c.867.33 1.16.764 1.16 1.719 0 1.592-.738 2.364-2.262 2.364-2.3 0-3.126-2.51-1.256-3.819 1.19-.834.932-.806 2.358-.264Zm7.38.822c.754.96.712 1.692-.146 2.55-1.449 1.449-4.265.421-4.265-1.558 0-1.978 3.089-2.673 4.411-.992Zm-35.847 8.462-.001 9.273H88.28c-1.281.001-1.959-.223-2.145-.706-.246-.64-.365-.64-1.28 0-1.586 1.111-4.57.908-6.145-.418-3.204-2.696-2.724-9.485.8-11.307 1.536-.795 3.762-.891 5.02-.218.827.442.875.292.875-2.714v-3.182h4.754l-.003 9.272Zm43.944-6.219c-.158 1.68-.29 5.852-.291 9.273l-.004 6.22h-4.523v-18.546H134.39l-.289 3.053Zm7.848 6.22v9.273h-4.976v-18.546h4.976v9.273Zm-82.327-2.751c0 1.99-.457 2.524-2.16 2.524-2.058 0-3.268 1.089-3.268 2.941 0 1.848 1.11 2.835 3.393 3.02 1.734.14 1.815.217 1.95 1.842l.14 1.697h-2.786c-3.846 0-5.745-.977-6.877-3.534-2.238-5.059 1.029-9.518 7.008-9.564 2.454-.019 2.6.041 2.6 1.074Zm12.079-.208c1.897 1.157 2.85 3.084 2.847 5.763-.003 4.092-2.495 6.469-6.783 6.469-1.27 0-2.917-.316-3.662-.701-4.185-2.164-4.141-9.332.071-11.591 2.074-1.112 5.65-1.084 7.526.06Zm31.329.358c1.428 1.312 2.651 4.823 2.142 6.15-.236.615-.973.748-4.146.748-2.177 0-3.86.19-3.86.436 0 .882 1.993 1.47 4.322 1.277 2.34-.194 2.388-.174 2.653 1.152.148.743.152 1.467.01 1.61-.143.143-1.743.335-3.555.426-2.437.123-3.672-.028-4.74-.58-3.88-2.006-4.347-7.798-.88-10.936 1.382-1.251 1.986-1.449 4.558-1.492 1.736-.028 2.399.201 3.496 1.209Zm9.088 3.376 1.032 4.178.556-2.703c1.258-6.117 1.091-5.853 3.614-5.699 1.231.075 2.29.188 2.354.251.065.063-.706 2.335-1.712 5.049-3.056 8.241-2.489 7.422-5.131 7.418l-2.32-.003-1.989-5.764c-1.093-3.17-2.078-6.007-2.187-6.303-.132-.359.531-.586 1.989-.679 1.203-.077 2.316-.091 2.474-.032.158.06.752 1.989 1.32 4.287Zm41.6-3.937c1.987 1.027 2.368 2.192 2.465 7.544l.089 4.891h-1.933c-1.063 0-2.059-.204-2.214-.454-.187-.303-.561-.303-1.127 0-1.454.778-4.305.531-5.596-.484-1.602-1.26-1.695-4.314-.174-5.738 1.267-1.187 3.147-1.919 4.93-1.919.894 0 1.298-.195 1.171-.565-.127-.372-1.112-.556-2.865-.538-1.469.016-2.82-.187-3.003-.452-.646-.934-.333-2.098.672-2.502 1.644-.661 6.137-.532 7.585.217Zm13.133.024c.532.641.624.641.983 0 .254-.455 1.032-.707 2.182-.707h1.787v6.83c0 10.069-.934 11.49-7.554 11.49-2.04 0-3.895-.204-4.121-.453-.242-.265-.25-1.046-.018-1.889l.393-1.437 2.491.257c2.721.281 4.286-.529 4.286-2.219 0-.7-.155-.768-.875-.382-1.301.696-4.211.567-5.36-.238-1.483-1.038-2.36-3.045-2.36-5.4 0-3.878 2.314-6.559 5.66-6.559 1.189 0 2.143.269 2.506.707Zm17.18-.021c1.728.893 2.699 2.836 2.699 5.398v2.058l-4.184.015-4.184.015 1.103.918c.866.721 1.641.894 3.594.803 2.401-.11 2.502-.068 2.839 1.193.193.719.238 1.42.101 1.557-.137.136-2.08.248-4.317.248h-4.068l-1.549-1.689c-2.751-3.003-2.09-8.248 1.301-10.316 1.745-1.064 4.816-1.156 6.665-.2Zm-57.619 2.819c-.159 1.68-.29 4.529-.292 6.333l-.003 3.28h-4.524v-12.666H126.7l-.288 3.053Zm-28.454-.303c-1.467.855-.94 1.774 1.018 1.774 1.997 0 2.496-.958.935-1.794-1.041-.557-.96-.558-1.953.02Zm81.587.25c-1.485 1.04-1.142 1.524 1.079 1.524 2.014 0 2.335-.222 1.689-1.164-.605-.884-1.798-1.039-2.768-.36Zm-113.104.352c-.83 1-1.029 3.546-.375 4.79 1.363 2.592 4.24.577 3.772-2.641-.263-1.807-.992-2.787-2.073-2.787-.437 0-1.033.287-1.324.638Zm98.03-.159c-.426.248-.906 1.158-1.069 2.023-.505 2.691 1.729 4.894 3.335 3.288.792-.792.678-4.233-.168-5.079-.822-.822-1.045-.847-2.098-.232Zm-82.593.516c-.703.703-.703 4.092 0 4.795.786.786 2.93.673 3.253-.173.468-1.217.303-4.051-.268-4.622-.298-.298-.97-.543-1.493-.543-.522 0-1.194.245-1.492.543Zm67.421 3.376c-.311.125-.565.72-.565 1.321 0 .839.241 1.093 1.04 1.093 1.248 0 2.126-.785 2.126-1.9 0-.802-1.267-1.053-2.601-.514Z"
        fill="#08590C"
      />
    </g>
    <defs>
      <filter
        id="a"
        x={0.413}
        y={0.413}
        width={234.173}
        height={234.173}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={10.293} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.348594 0 0 0 0 0.492487 0 0 0 0 0.8625 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_561_28586"
        />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={10.293} />
        <feGaussianBlur stdDeviation={5.147} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="effect1_dropShadow_561_28586"
          result="effect2_dropShadow_561_28586"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_561_28586"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)

export default Logo
