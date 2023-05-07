import Image from "next/image";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="my-12 text-3xl text-center dark:text-white">
        Hello and welcome to my website! &nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Michael</span>
        </span>
      </p>
    </main>
  );
}
