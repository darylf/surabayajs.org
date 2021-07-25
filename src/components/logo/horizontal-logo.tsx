import * as React from "react";

import { Box, BoxProps } from "@chakra-ui/react";

export const HorizontalLogo: React.FC<BoxProps> = (props) => {
  return (
    <Box
      as="svg"
      fill="none"
      viewBox="0 0 696 140"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M603.393 36.674V15.531h33.97v5.078c3.323-2.322 7.05-4.047 11.127-5.175a45.852 45.852 0 0112.275-1.665c4.779 0 9.442.731 13.946 2.191 4.938 1.6 9.391 4.241 13.273 7.85L696 31.258l-17.918 18.907.134.083c3.758 2.338 6.909 5.44 9.392 9.217 2.906 4.42 4.226 9.76 4.226 15.84 0 5.313-1.03 10.195-3.174 14.538-2.073 4.2-4.933 7.771-8.526 10.608-3.413 2.694-7.332 4.69-11.682 5.987-4.083 1.217-8.351 1.821-12.773 1.821H528.138l-.527 1.357c-1.071 2.802-2.28 5.329-3.649 7.582-1.617 2.662-3.582 4.98-5.889 6.904-2.521 2.103-5.444 3.639-8.677 4.604-2.947.88-6.202 1.284-9.793 1.284a45.58 45.58 0 01-11.787-1.54l-9.249-2.469 2.459-17.722H183.43C171.97 127.571 140.257 140 100.119 140c-42.532 0-75.604-13.955-85.142-35.266C9.27 91.985 4.42 72.75 3.185 58.036 1.155 55.375 0 52.064 0 48.353c0-9.02 6.845-17.748 16.772-23.716 11.502-6.915 19.343-11.974 31.25-19.928C52.43 1.765 57.043.32 61.712.32c3.545 0 6.485.736 9.785 2.059.183.073.631.259 1.053.433 1.106-.126 3.628-.453 10.074-1.282 1.519-.195 2.846-.36 4.119-.511C92.349.355 96.628 0 100.119 0c3.491 0 7.77.355 13.376 1.02 1.273.15 2.6.316 4.119.511 6.445.83 8.968 1.156 10.074 1.282.422-.174.87-.36 1.053-.433 3.3-1.323 6.24-2.06 9.784-2.06 4.67 0 9.284 1.445 13.69 4.389 11.903 7.95 19.748 13.012 31.25 19.927 3.522 2.118 6.656 4.582 9.234 7.285.168-.33.343-.658.525-.982 2.228-3.964 5.198-7.314 8.845-9.964 3.45-2.507 7.351-4.354 11.64-5.541a45.852 45.852 0 0112.275-1.665c4.779 0 9.442.731 13.946 2.191 4.938 1.6 9.391 4.241 13.273 7.85l8.016 7.449-5.132 5.415H378.566V10.833h33.384v25.841h191.443z"
        fill="#fff"
      />
      <path
        d="M236.886 41.37c-1.304-1.89-3.047-3.276-5.23-4.155a18.261 18.261 0 00-6.891-1.32c-1.434 0-2.818.163-4.154.489a11.277 11.277 0 00-3.617 1.564 8.165 8.165 0 00-2.59 2.786c-.652 1.14-.978 2.492-.978 4.056 0 2.347.815 4.139 2.444 5.377 1.629 1.238 3.649 2.313 6.06 3.226 2.411.912 5.051 1.792 7.918 2.64 2.867.846 5.506 2.02 7.917 3.518 2.411 1.5 4.432 3.487 6.061 5.963 1.629 2.477 2.443 5.768 2.443 9.874 0 3.714-.684 6.957-2.052 9.726-1.369 2.77-3.21 5.067-5.523 6.892-2.313 1.825-5.001 3.193-8.064 4.106-3.063.912-6.289 1.368-9.677 1.368-4.301 0-8.439-.717-12.414-2.15-3.975-1.434-7.396-3.845-10.264-7.234l9.286-8.994c1.499 2.281 3.47 4.057 5.914 5.328a16.61 16.61 0 007.771 1.906c1.434 0 2.867-.195 4.301-.586a13.299 13.299 0 003.91-1.76 9.182 9.182 0 002.835-2.981c.716-1.206 1.075-2.59 1.075-4.155 0-2.542-.815-4.497-2.444-5.865-1.629-1.369-3.649-2.526-6.06-3.47a97.354 97.354 0 00-7.918-2.689c-2.867-.847-5.506-2.004-7.917-3.47-2.411-1.466-4.432-3.422-6.061-5.865-1.629-2.444-2.443-5.719-2.443-9.825 0-3.584.733-6.68 2.199-9.286 1.466-2.607 3.389-4.774 5.767-6.501 2.379-1.727 5.099-3.014 8.162-3.861a35.04 35.04 0 019.384-1.271c3.649 0 7.184.554 10.605 1.662 3.421 1.107 6.5 2.932 9.237 5.474l-8.992 9.482zm60.108 54.35h-11.143v-7.526h-.196c-1.107 2.346-2.802 4.382-5.082 6.11-2.281 1.726-5.377 2.59-9.286 2.59-3.128 0-5.784-.505-7.967-1.515-2.183-1.01-3.959-2.38-5.327-4.106-1.369-1.727-2.346-3.698-2.933-5.914a27.035 27.035 0 01-.879-6.94v-29.62h11.729v23.754c0 1.303.066 2.753.196 4.35.13 1.597.472 3.096 1.026 4.497a8.595 8.595 0 002.542 3.519c1.14.945 2.753 1.417 4.838 1.417 1.955 0 3.601-.326 4.936-.977 1.336-.652 2.444-1.532 3.324-2.64.88-1.108 1.515-2.378 1.906-3.812.391-1.434.586-2.933.586-4.497V48.8h11.73V95.72zm9.475-46.922h11.73v7.43h.196c1.303-2.737 3.16-4.855 5.571-6.354 2.411-1.5 5.181-2.249 8.309-2.249.716 0 1.417.066 2.101.196.684.13 1.385.293 2.102.489v11.34a32.929 32.929 0 00-2.884-.636 16.375 16.375 0 00-2.786-.245c-2.736 0-4.936.506-6.597 1.516-1.662 1.01-2.933 2.167-3.813 3.47-.879 1.303-1.466 2.607-1.759 3.91-.293 1.303-.44 2.281-.44 2.933V95.72h-11.73V48.798zm63.53 40.47h-.293c-1.695 2.673-3.845 4.612-6.452 5.817-2.606 1.206-5.473 1.809-8.601 1.809-2.151 0-4.252-.294-6.305-.88-2.053-.587-3.877-1.466-5.474-2.64a13.573 13.573 0 01-3.861-4.398c-.977-1.76-1.466-3.813-1.466-6.159 0-2.542.456-4.708 1.368-6.5.913-1.793 2.134-3.292 3.666-4.497 1.531-1.206 3.307-2.167 5.327-2.884a36.493 36.493 0 016.305-1.613 55.858 55.858 0 016.598-.684 142.25 142.25 0 016.256-.147h2.932v-1.27c0-2.933-1.01-5.133-3.03-6.6-2.02-1.465-4.594-2.199-7.722-2.199-2.476 0-4.79.44-6.94 1.32-2.151.88-4.008 2.07-5.572 3.568l-6.158-6.158c2.607-2.672 5.653-4.595 9.139-5.768a33.648 33.648 0 0110.801-1.76c3.324 0 6.126.375 8.407 1.125 2.281.749 4.17 1.71 5.669 2.883 1.499 1.173 2.656 2.526 3.47 4.057a18.842 18.842 0 011.76 4.644c.358 1.564.57 3.079.635 4.545.065 1.466.098 2.753.098 3.861v26.98h-10.557V89.27zm-.684-14.565h-2.444c-1.629 0-3.454.066-5.474.196s-3.926.44-5.718.929c-1.792.488-3.307 1.205-4.545 2.15-1.238.945-1.857 2.265-1.857 3.96 0 1.107.244 2.036.733 2.785a6.629 6.629 0 001.906 1.906 7.975 7.975 0 002.639 1.125c.977.228 1.955.342 2.932.342 4.041 0 7.022-.961 8.944-2.884 1.923-1.922 2.884-4.546 2.884-7.87v-2.639zm20.032-52.885h11.729v32.944h.294c.586-.782 1.336-1.58 2.248-2.395.912-.815 2.02-1.58 3.323-2.298 1.304-.717 2.802-1.303 4.497-1.76 1.694-.456 3.649-.684 5.865-.684 3.323 0 6.386.636 9.188 1.907 2.802 1.27 5.197 3.014 7.184 5.23 1.988 2.215 3.535 4.822 4.643 7.82 1.108 2.998 1.662 6.224 1.662 9.678 0 3.454-.521 6.68-1.564 9.677-1.043 2.998-2.574 5.605-4.594 7.82-2.02 2.216-4.464 3.96-7.331 5.23-2.868 1.271-6.093 1.907-9.677 1.907-3.324 0-6.419-.652-9.286-1.955-2.867-1.304-5.148-3.39-6.843-6.257h-.195v7.039h-11.143V21.818zM428.25 72.26c0-1.825-.309-3.585-.928-5.28a13.255 13.255 0 00-2.737-4.496c-1.206-1.303-2.656-2.346-4.35-3.128-1.694-.782-3.617-1.173-5.767-1.173-2.151 0-4.073.39-5.767 1.173-1.695.782-3.144 1.825-4.35 3.128a13.24 13.24 0 00-2.737 4.497 15.266 15.266 0 00-.929 5.279c0 1.824.31 3.584.929 5.278a13.239 13.239 0 002.737 4.497c1.206 1.303 2.655 2.346 4.35 3.128 1.694.782 3.616 1.173 5.767 1.173 2.15 0 4.073-.39 5.767-1.173 1.694-.782 3.144-1.825 4.35-3.128a13.254 13.254 0 002.737-4.497c.619-1.694.928-3.454.928-5.278zm48.183 17.009h-.293c-1.694 2.672-3.844 4.61-6.451 5.816-2.607 1.206-5.474 1.809-8.602 1.809-2.15 0-4.252-.294-6.305-.88-2.052-.587-3.877-1.466-5.473-2.64a13.55 13.55 0 01-3.861-4.398c-.978-1.76-1.467-3.813-1.467-6.159 0-2.542.457-4.708 1.369-6.5.912-1.793 2.134-3.292 3.665-4.497 1.532-1.206 3.307-2.167 5.328-2.884a36.482 36.482 0 016.304-1.613 55.88 55.88 0 016.598-.684c2.216-.098 4.301-.147 6.256-.147h2.932v-1.27c0-2.933-1.01-5.133-3.03-6.6-2.02-1.465-4.594-2.199-7.722-2.199-2.476 0-4.789.44-6.94 1.32-2.15.88-4.007 2.07-5.571 3.568l-6.158-6.158c2.606-2.672 5.653-4.595 9.139-5.768a33.643 33.643 0 0110.801-1.76c3.323 0 6.125.375 8.406 1.125 2.281.749 4.171 1.71 5.67 2.883 1.498 1.173 2.655 2.526 3.47 4.057.814 1.532 1.401 3.08 1.759 4.644.358 1.564.57 3.079.635 4.545.066 1.466.098 2.753.098 3.861v26.98h-10.557V89.27zm-.684-14.566h-2.443c-1.63 0-3.454.066-5.474.196s-3.926.44-5.719.929c-1.792.488-3.307 1.205-4.545 2.15-1.238.945-1.857 2.265-1.857 3.96 0 1.107.244 2.036.733 2.785a6.641 6.641 0 001.906 1.906 7.984 7.984 0 002.639 1.125 12.87 12.87 0 002.933.342c4.04 0 7.021-.961 8.944-2.884 1.922-1.922 2.883-4.546 2.883-7.87v-2.639zm13.679-25.905h12.902l13.098 32.553h.196l11.73-32.553h12.218l-22.189 56.991c-.847 2.216-1.775 4.155-2.785 5.817-1.01 1.662-2.2 3.063-3.568 4.203-1.369 1.141-2.981 1.988-4.839 2.542-1.857.554-4.089.831-6.695.831-3.063 0-6.061-.391-8.993-1.173l1.466-10.558a24.77 24.77 0 002.884.831c1.01.228 2.036.342 3.079.342 1.433 0 2.639-.13 3.616-.391.978-.26 1.809-.668 2.493-1.222.684-.554 1.254-1.27 1.71-2.15.457-.88.945-1.939 1.467-3.177l2.248-5.572-20.038-47.313zm82.59 40.47h-.293c-1.695 2.673-3.845 4.612-6.452 5.817-2.606 1.206-5.473 1.809-8.601 1.809-2.151 0-4.252-.294-6.305-.88-2.053-.587-3.877-1.466-5.474-2.64a13.573 13.573 0 01-3.861-4.398c-.977-1.76-1.466-3.813-1.466-6.159 0-2.542.456-4.708 1.368-6.5.913-1.793 2.135-3.292 3.666-4.497 1.531-1.206 3.307-2.167 5.327-2.884a36.493 36.493 0 016.305-1.613 55.858 55.858 0 016.598-.684 142.25 142.25 0 016.256-.147h2.932v-1.27c0-2.933-1.01-5.133-3.03-6.6-2.02-1.465-4.594-2.199-7.722-2.199-2.476 0-4.79.44-6.94 1.32-2.151.88-4.008 2.07-5.572 3.568l-6.158-6.158c2.607-2.672 5.653-4.595 9.139-5.768a33.648 33.648 0 0110.801-1.76c3.324 0 6.126.375 8.407 1.125 2.281.749 4.17 1.71 5.669 2.883 1.499 1.173 2.656 2.526 3.47 4.057a18.842 18.842 0 011.76 4.644c.358 1.564.57 3.079.635 4.545.065 1.466.098 2.753.098 3.861v26.98h-10.557V89.27zm-.684-14.565h-2.444c-1.629 0-3.454.066-5.474.196s-3.926.44-5.718.929c-1.792.488-3.307 1.205-4.545 2.15-1.238.945-1.857 2.265-1.857 3.96 0 1.107.244 2.036.733 2.785a6.629 6.629 0 001.906 1.906 7.975 7.975 0 002.639 1.125c.977.228 1.955.342 2.932.342 4.041 0 7.022-.961 8.944-2.884 1.923-1.922 2.884-4.546 2.884-7.87v-2.639zm55.025 1.858c0 2.737-.44 5.376-1.319 7.918-.88 2.541-2.183 4.774-3.91 6.696-1.727 1.923-3.894 3.454-6.5 4.595-2.607 1.14-5.637 1.71-9.091 1.71-5.474 0-9.954-1.27-13.44-3.812-3.486-2.542-5.783-6.582-6.891-12.122l11.534-2.737c.391 2.281 1.319 4.106 2.786 5.474 1.466 1.369 3.274 2.053 5.425 2.053 3.519 0 5.913-1.19 7.184-3.568 1.271-2.379 1.906-5.653 1.906-9.824V26.51h12.316v50.05zm45.056-35.192c-1.304-1.89-3.047-3.275-5.23-4.154a18.261 18.261 0 00-6.891-1.32c-1.434 0-2.818.163-4.154.489a11.277 11.277 0 00-3.617 1.564 8.165 8.165 0 00-2.59 2.786c-.652 1.14-.978 2.492-.978 4.056 0 2.347.815 4.139 2.444 5.377 1.629 1.238 3.649 2.313 6.06 3.226 2.411.912 5.051 1.792 7.918 2.64 2.867.846 5.506 2.02 7.917 3.518 2.411 1.5 4.432 3.487 6.061 5.963 1.629 2.477 2.443 5.768 2.443 9.874 0 3.714-.684 6.957-2.052 9.726-1.369 2.77-3.21 5.067-5.523 6.892-2.313 1.825-5.001 3.193-8.064 4.106-3.063.912-6.289 1.368-9.677 1.368-4.301 0-8.439-.717-12.414-2.15-3.975-1.434-7.396-3.845-10.263-7.234l9.286-8.994c1.498 2.281 3.47 4.057 5.913 5.328a16.61 16.61 0 007.771 1.906c1.434 0 2.867-.195 4.301-.586a13.299 13.299 0 003.91-1.76 9.182 9.182 0 002.835-2.981c.716-1.206 1.075-2.59 1.075-4.155 0-2.542-.815-4.497-2.444-5.865-1.629-1.369-3.649-2.526-6.06-3.47a97.223 97.223 0 00-7.918-2.689c-2.867-.847-5.506-2.004-7.917-3.47-2.411-1.466-4.431-3.422-6.061-5.865-1.629-2.444-2.443-5.719-2.443-9.825 0-3.584.733-6.68 2.199-9.286 1.466-2.607 3.389-4.774 5.767-6.501 2.379-1.727 5.099-3.014 8.162-3.861a35.04 35.04 0 019.384-1.271c3.649 0 7.184.554 10.605 1.662 3.421 1.107 6.5 2.932 9.237 5.474l-8.992 9.482zM187.113 51.584c0 14.011-5.309 36.144-11.176 49.28-6.635 14.857-33.178 28.989-75.437 28.989-42.258 0-68.801-14.132-75.437-28.989-5.867-13.136-11.176-35.27-11.176-49.28h173.226z"
        fill="#6EA58C"
      />
      <path
        d="M57.194 97.906l12.819 3.414c-6.636 3.286-10.28 11.344-11.917 16.098-.346 1.005-1.814.893-2.011-.151-1.49-7.862-.547-15.621 1.108-19.36zm13.535 8.658l9.56-.312c-1.465 3.159-4.34 10.195-6.042 14.403-.393.971-1.803.812-1.972-.223-.64-3.906-1.546-10.099-1.546-13.868zm73.078-8.658c1.655 3.74 2.598 11.499 1.109 19.361-.198 1.044-1.666 1.156-2.012.151-1.637-4.754-5.281-12.812-11.917-16.098l12.82-3.414zm-13.536 8.658c0 3.769-.906 9.962-1.546 13.868-.169 1.035-1.579 1.194-1.972.223-1.701-4.208-4.577-11.244-6.043-14.403l9.561.312z"
        fill="#FFEBD2"
      />
      <path
        d="M178.452 34.191c-14.435-8.697-24.964-15.744-31.758-20.292-8.661-5.798-14.435 0-17.323 0-4.082 0-20.209-2.899-28.871-2.899-8.66 0-24.788 2.899-28.87 2.899-2.888 0-8.662-5.798-17.323 0-6.795 4.548-17.323 11.595-31.759 20.292C15.331 38.539 11 44.336 11 48.685c0 4.35 4.097 5.807 8.661 5.807 14.436 0 17.323 11.586 28.871 31.878 7.657 13.454 8.662 26.09 51.968 26.09 43.306 0 44.311-12.636 51.968-26.09 11.548-20.292 14.435-31.878 28.871-31.878 4.564 0 8.661-1.457 8.661-5.807 0-4.35-4.331-10.147-11.548-14.494z"
        fill="#7DB9A0"
      />
      <path
        d="M145.849 13.391c-8.189-4.879-13.687.508-16.478.508-4.083 0-20.21-2.899-28.871-2.899-8.661 0-24.788 2.899-28.871 2.899-2.791 0-8.29-5.387-16.478-.508 4.132 9.234 16.478 9.853 16.478 17.901 0 10.856-14.16 54.335-10.292 73.299 6.643 4.765 17.708 7.869 39.163 7.869s32.52-3.103 39.163-7.869c3.868-18.964-10.292-62.442-10.292-73.299 0-8.048 12.346-8.667 16.478-17.9z"
        fill="#96D2AF"
      />
      <path
        d="M57.194 37.09c-3.19 0-5.775-2.596-5.775-5.798s2.586-5.798 5.775-5.798c3.188 0 5.774 2.596 5.774 5.798s-2.586 5.797-5.775 5.797zm86.613 0c-3.189 0-5.774-2.596-5.774-5.798s2.585-5.798 5.774-5.798 5.774 2.596 5.774 5.798-2.585 5.797-5.774 5.797z"
        fill="#464655"
      />
    </Box>
  );
};
