import { NextResponse } from "next/server";

interface SkillItem {
  title: string,
  progressBefore: number;
  progressAfter: number;
  desc: string
}
interface SkillData{
  data: SkillItem[];
}

export async function GET() : Promise<NextResponse>{
  const data: SkillItem[] = [
    {
      title: "html",
      progressBefore: 0,
      progressAfter: 90,
      desc: "웹 표준에 준수하여, 마크업을 할 수 있으며, flex or grid를 활용하여 레이아웃 구성을 할 수 있다."
    },
    {
      title: "css",
      progressBefore: 0,
      progressAfter: 80,
      desc: "마크업에 작성된 CLASS를 토대로, 디자인을 할 수 있다."
    },
    {
      title: "JS",
      progressBefore: 0,
      progressAfter: 70,
      desc: "웹 페이지 내 동적인 기능을 구현, 서버의 데이터를 수신해 가공할 수 있다."
    },
    {
      title: "REACT",
      progressBefore: 0,
      progressAfter: 40,
      desc: "REACT를 활용하여, SPA 사이트 제작을 할 수 있다. REDUX, ROUTER DOM 등 다양한 라이브러리 활용을 할 수 있다."
    },
    {
      title: "NEXTJS",
      progressBefore: 0,
      progressAfter: 60,
      desc: "REACT 프레임워크 NEXTJS를 활용하여 SSR 사이트 제작을 할 수 있다."
    }

    
  ]
  return NextResponse.json({data} as SkillData);
}