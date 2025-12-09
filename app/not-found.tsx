import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <div>
      <h1>존재하지 않는 페이지 입니다.</h1>
    </div>
  );
}
