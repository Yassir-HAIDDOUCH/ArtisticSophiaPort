/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#305cde', // Default shade of primary color
          light: '#59b5f7',   // Lighter shade
          dark: '#1e4aad',    // Darker shade
        },
        secondary: {
          DEFAULT: '#182e6f', // Default shade of secondary color
          light: '#274ab3',   // Lighter shade
          dark: '#0f1c4d',    // Darker shade
        },
        bodyBg: '#c1cef5', // Background color for the body
      },
      container: {
        center: true, // Centers the container
        padding: '1rem', // Adds padding to the container
        screens: {
          sm: '100%',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      backgroundImage: {
        hero: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='2000' height='560' preserveAspectRatio='none' viewBox='0 0 2000 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1026%26quot%3b)' fill='none'%3e%3crect width='2000' height='560' x='0' y='0' fill='rgba(48%2c 92%2c 222%2c 1)'%3e%3c/rect%3e%3cpath d='M 0%2c102 C 133.4%2c115 400.2%2c167.4 667%2c167 C 933.8%2c166.6 1067.4%2c94.8 1334%2c100 C 1600.6%2c105.2 1866.8%2c174.4 2000%2c193L2000 560L0 560z' fill='rgba(89%2c 125%2c 229%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c354 C 133.4%2c367.8 400.2%2c427.8 667%2c423 C 933.8%2c418.2 1067.4%2c321.4 1334%2c330 C 1600.6%2c338.6 1866.8%2c438.8 2000%2c466L2000 560L0 560z' fill='rgba(193%2c 206%2c 245%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1026'%3e%3crect width='2000' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e\")",
        home: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='700' height='200' preserveAspectRatio='none' viewBox='0 0 700 200'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1036%26quot%3b)' fill='none'%3e%3crect width='700' height='200' x='0' y='0' fill='rgba(193%2c 206%2c 245%2c 1)'%3e%3c/rect%3e%3cpath d='M374.09327037220015 122.50727320505644L373.0893000485631 180.0246945246442 430.60672136815083 181.0286648482812 431.6106916917879 123.51124352869348z' fill='rgba(48%2c 92%2c 222%2c 0.35)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M593.3159130188556-9.575215868596702L562.7786171948349-12.78481499326213 590.1063138941902 20.96207995542401z' fill='rgba(48%2c 92%2c 222%2c 0.35)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M525.0938530025559 99.44359217941775L496.1643528556478 124.59162298877752 521.3123836650076 153.52112313568557 550.2418838119156 128.3730923263258z' fill='rgba(48%2c 92%2c 222%2c 0.35)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M460.379%2c120.631C474.212%2c119.543%2c482.804%2c106.985%2c489.332%2c94.741C495.362%2c83.432%2c498.729%2c70.638%2c493.197%2c59.078C486.85%2c45.815%2c475.08%2c33.94%2c460.379%2c34.24C446.013%2c34.534%2c437.006%2c47.938%2c429.806%2c60.373C422.583%2c72.847%2c415.77%2c87.16%2c422.292%2c100.014C429.293%2c113.812%2c444.954%2c121.844%2c460.379%2c120.631' fill='rgba(48%2c 92%2c 222%2c 0.35)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M553.86%2c114.293C560.621%2c113.815%2c566.197%2c109.865%2c569.931%2c104.209C574.201%2c97.741%2c578.231%2c89.807%2c574.516%2c83.004C570.709%2c76.033%2c561.801%2c74.596%2c553.86%2c74.781C546.31%2c74.957%2c538.883%2c77.573%2c534.803%2c83.928C530.379%2c90.819%2c528.948%2c99.864%2c533.301%2c106.8C537.457%2c113.422%2c546.061%2c114.845%2c553.86%2c114.293' fill='rgba(48%2c 92%2c 222%2c 0.35)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M25.788204288428172 24.565867657733076L-9.819359501844026-19.491596905976202-28.369494021638396 26.421597173070644z' fill='rgba(48%2c 92%2c 222%2c 0.35)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1036'%3e%3crect width='700' height='200' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e\")",
      },
    },
  },
  plugins: [],
};
