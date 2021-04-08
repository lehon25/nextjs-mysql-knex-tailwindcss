import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    // <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>

    //     <p className={styles.description}>
    //       Get started by editing{' '}
    //       <code className={styles.code}>pages/index.js</code>
    //     </p>

    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <h3>Documentation &rarr;</h3>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h3>Learn &rarr;</h3>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/master/examples"
    //         className={styles.card}
    //       >
    //         <h3>Examples &rarr;</h3>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //       >
    //         <h3>Deploy &rarr;</h3>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
    //     </a>
    //   </footer>
    // </div>

    <div className="px-8 mt-10">
      <Head>
        <title>Article Preview Component</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Link href="/auth/login">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-8">
            Login
          </button>
        </Link>
        <Link href="/auth/register">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Register
          </button>
        </Link>
      </div>
      <div className="mx-auto lg:w-3/5 lg:flex lg:flex-row lg:h-auto">
        <img
          className="rounded-tr-md rounded-tl-md h-48 w-full lg:h-auto lg:w-2/5 lg:rounded-bl-md lg:rounded-tr-none"
          src="/images/drawers.jpg"
          alt=""
        />
        
        <div className="bg-white p-8 rounded-bl-md rounded-br-md lg:rounded-bl-none lg:rounded-tr-md">
          <h2 className="text-gray-700 font-semibold">
            Shift overall look and fell by adding these wonderful touches to
            furniture in your home
          </h2>
          <p className="text-sm text-gray-600 mt-4">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I've got some simple tips to help
            you make any room feel complete.
          </p>
          <div className="flex items-center mt-8">
            <div className="flex items-center">
              <img
                className="h-10 w-10 rounded-full"
                src="/images/avatar-michelle.jpg"
                alt=""
              />
              <div className="ml-4">
                <p className="text-gray-800 text-sm font-semibold">
                  Michelle Appleton
                </p>
                <p className="text-gray-600 text-sm">28 Jun 2020</p>
              </div>
            </div>
            <div className="w-8 h-8 ml-auto bg-gray-200 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
                <path
                  fill="#6E8098"
                  d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
   
    
    </div>

    //   <h1 className="text-4xl text-red-400 bg-gray-800 p-4 text-center">
    //   TailwindCSS v2 with Next.js
    // </h1>

    //   <div className="flex rounded-lg p-24 justify-center">
    //   <img
    //    className="h-24 w-24 rounded-full mx-0 mr-5"
    //    src="https://bit.ly/37LLS6l"
    //   />
    //   <div className="text-center md:text-left">
    //    <h2 className="text-lg font-bold">Jake Prins</h2>
    //    <div className="text-purple-600">JavaScript developer</div>
    //    <div className="text-gray-600">Twitter: @jakeprins_nl</div>
    //    <div className="text-gray-600">jakeprins.com</div>
    //   </div>
    //  </div>
  );
}
