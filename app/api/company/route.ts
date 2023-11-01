import { NextApiRequest, NextApiResponse } from "next";
interface Company {
  International : string;
  Code: string;
  Name: string;
}


export default (req: NextApiRequest, res: NextApiResponse) {
  const data: Company[] = [
    {
        "International": "false",
        "Code": "04",
        "Name": "CJ대한통운"
    },
    {
        "International": "false",
        "Code": "05",
        "Name": "한진택배"
    },
    {
        "International": "false",
        "Code": "08",
        "Name": "롯데택배"
    },
    {
        "International": "false",
        "Code": "01",
        "Name": "우체국택배"
    },
    {
        "International": "false",
        "Code": "06",
        "Name": "로젠택배"
    },
    {
        "International": "false",
        "Code": "11",
        "Name": "일양로지스"
    },
    {
        "International": "true",
        "Code": "12",
        "Name": "EMS"
    },
    {
        "International": "true",
        "Code": "13",
        "Name": "DHL"
    },
    {
        "International": "false",
        "Code": "20",
        "Name": "한덱스"
    },
    {
        "International": "true",
        "Code": "21",
        "Name": "FedEx"
    },
    {
        "International": "true",
        "Code": "14",
        "Name": "UPS"
    },
    {
        "International": "true",
        "Code": "26",
        "Name": "USPS"
    },
    {
        "International": "false",
        "Code": "22",
        "Name": "대신택배"
    },
    {
        "International": "false",
        "Code": "23",
        "Name": "경동택배"
    },
    {
        "International": "false",
        "Code": "32",
        "Name": "합동택배"
    },
    {
        "International": "false",
        "Code": "46",
        "Name": "CU 편의점택배"
    },
    {
        "International": "false",
        "Code": "24",
        "Name": "GS Postbox 택배"
    },
    {
        "International": "true",
        "Code": "25",
        "Name": "TNT Express"
    },
    {
        "International": "false",
        "Code": "16",
        "Name": "한의사랑택배"
    },
    {
        "International": "false",
        "Code": "17",
        "Name": "천일택배"
    },
    {
        "International": "false",
        "Code": "18",
        "Name": "건영택배"
    },
    {
        "International": "true",
        "Code": "28",
        "Name": "GSMNtoN"
    },
    {
        "International": "true",
        "Code": "30",
        "Name": "KGL네트웍스"
    },
    {
        "International": "true",
        "Code": "33",
        "Name": "DHL Global Mail"
    },
    {
        "International": "true",
        "Code": "34",
        "Name": "i-Parcel"
    },
    {
        "International": "true",
        "Code": "37",
        "Name": "LX판토스"
    },
    {
        "International": "true",
        "Code": "38",
        "Name": "ECMS Express"
    },
    {
        "International": "false",
        "Code": "40",
        "Name": "굿투럭"
    },
    {
        "International": "true",
        "Code": "41",
        "Name": "GSI Express"
    },
    {
        "International": "true",
        "Code": "42",
        "Name": "CJ대한통운 국제특송"
    },
    {
        "International": "false",
        "Code": "43",
        "Name": "애니트랙"
    },
    {
        "International": "false",
        "Code": "44",
        "Name": "SLX택배"
    },
    {
        "International": "false",
        "Code": "45",
        "Name": "우리택배(구호남택배)"
    },
    {
        "International": "false",
        "Code": "47",
        "Name": "우리한방택배"
    },
    {
        "International": "true",
        "Code": "48",
        "Name": "ACI Express"
    },
    {
        "International": "true",
        "Code": "49",
        "Name": "A.C.E EXPRESS INC"
    },
    {
        "International": "true",
        "Code": "50",
        "Name": "GPS Logix"
    },
    {
        "International": "true",
        "Code": "51",
        "Name": "성원글로벌카고"
    },
    {
        "International": "false",
        "Code": "53",
        "Name": "농협택배"
    },
    {
        "International": "false",
        "Code": "54",
        "Name": "홈픽택배"
    },
    {
        "International": "true",
        "Code": "55",
        "Name": "EuroParcel"
    },
    {
        "International": "true",
        "Code": "57",
        "Name": "Cway Express"
    },
    {
        "International": "true",
        "Code": "60",
        "Name": "YJS글로벌(영국)"
    },
    {
        "International": "true",
        "Code": "63",
        "Name": "은하쉬핑"
    },
    {
        "International": "true",
        "Code": "65",
        "Name": "YJS글로벌(월드)"
    },
    {
        "International": "true",
        "Code": "66",
        "Name": "Giant Network Group"
    },
    {
        "International": "true",
        "Code": "67",
        "Name": "디디로지스"
    },
    {
        "International": "true",
        "Code": "69",
        "Name": "대림통운"
    }
]
const { International } = req.query;


let filteredData = data;
if (International) {
  let intlValue:string;
  if (Array.isArray(International)) {
    intlValue = International[0].toLowerCase();
  } else {
    intlValue = International.toLowerCase();
  }
  filteredData = data.filter(company => company.International.toLowerCase() === intlValue);
}

if (req.method === 'GET') {
  // 현재의 코드 로직
  res.status(200).json({ data: filteredData });
} else {
  res.status(405).end(); // Method Not Allowed
}
}