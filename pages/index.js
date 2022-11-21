import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../layouts/layout.js";

export default function Home() {
  return <div className={styles.container}></div>;
}

Home.getLayout = Layout;
