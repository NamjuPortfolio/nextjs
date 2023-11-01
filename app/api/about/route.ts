import { NextResponse } from "next/server";

interface AboutItem {
  title: string;
  desc?: string;
  desc2?: string;
  date?: string[];
  dateDesc?: string[];
}
interface AboutData{
  data: AboutItem[];
}

export async function GET() : Promise<NextResponse>{
  const data: AboutItem[] = [
    {
      title: "◆ MIND",
      desc: "혼자 부딪혀봐야 온전히 내 것이 된다",
      desc2: "는 마인드를 가지고 있어, 혼자 찾아보고 고민하여 문제 해결하는 것을 좋아합니다."
    },
    {
      title: "◆ EDUCATION",
      date: [
        "2023.06.29 ~ 2023.11.30",
        "2023.01.01 ~ 2023.12.31",
        "2023.01.01 ~ 2023.12.31",
        "2023.01.01 ~ 2023.12.31"
      ],
      dateDesc: [
        "(혼합+디지털컨버전스) React를 활용한 프론트엔드 개발자 양성(SPA 프로젝트 개발) A",
        "설명2",
        "설명3",
        "설명4"
      ]
    },
    {
      title: "◆ LICENSE",
      date: [
        "2023.06",
        "2023.05",
        "2023.04"
      ],
      dateDesc: [
        "자격증 이름1",
        "자격증 이름2",
        "자격증 이름3"
      ]
    }
    
  ]
  return NextResponse.json({data} as AboutData);
}