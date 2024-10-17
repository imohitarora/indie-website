import { Metadata } from "next";
import Home from "./(standard)/home/page";
import { metadata as _metadata } from "./(standard)/home/page";

export const dynamic = 'force-static'

export const metadata: Metadata = _metadata;

export default Home;
