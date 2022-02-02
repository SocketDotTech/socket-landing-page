import patternLight from "../assets/pattern-light.svg";
const teamList = [
  {
    name: "Vaibhav Chellani",
    role: "Co founder",
    twitter: "vaibhavchellani",
    imgSrc:
      "https://pbs.twimg.com/profile_images/1358689766842093574/fzRjgWpP_400x400.jpg",
  },
  {
    name: "Rishabh Khurana",
    role: "co founder",
    twitter: "khuranarishabh0",
    imgSrc:
      "https://pbs.twimg.com/profile_images/1445800948572442630/nBBfCp8Y_400x400.jpg",
  },
  {
    name: "Arth Patel",
    role: "Backend Engineer",
    twitter: "arthcp",
    imgSrc:
      "https://pbs.twimg.com/profile_images/1464774690916814852/cTnVLnZ3_400x400.jpg",
  },
  {
    name: "Vamsi Reddy",
    role: "Backend Engineer",
    twitter: "reddyismav",
    imgSrc:
      "https://pbs.twimg.com/profile_images/1450133485763530753/sNbx_Ebp_400x400.jpg",
  },
  {
    name: "Aniket Sharma",
    role: "Full stack",
    twitter: "aniket965as",
    imgSrc:
      "https://pbs.twimg.com/profile_images/1383268944014766090/76TPY68v_400x400.jpg",
  },
  {
    name: "Salil Naik",
    role: "Frontend Engineer",
    twitter: "__salil_naik__",
    imgSrc:
      "https://pbs.twimg.com/profile_images/1245749133224415233/dtqzcQTF_400x400.jpg",
  },
  {
    name: "Shrey Keny",
    role: "Engineering Intern",
    twitter: "ShreyKeny",
    imgSrc:
      "https://pbs.twimg.com/profile_images/1479528377828593664/-wpeod-S_400x400.jpg",
  },
  {
    name: "Rohit Chauhan",
    role: "Business",
    twitter: "0xmadclown",
    imgSrc:
      "https://pbs.twimg.com/profile_images/1475143603462676481/J_Kl8GeV_400x400.png",
  },
  {
    name: "Sriram Vasudevan",
    role: "Marketing",
    twitter: "sriramvas",
    imgSrc:
      "https://pbs.twimg.com/profile_images/1261151854395678721/SJBCg0Ol_400x400.jpg",
  },
  {
    name: "Absolut",
    role: "Community",
    twitter: "AbsoluteUknit",
    imgSrc:
      "https://pbs.twimg.com/profile_images/1471594621730013188/hj_smNF2_400x400.jpg",
  },
  {
    name: "Devain Pal Bansal",
    role: "Content creator",
    twitter: "dpbmaverick98",
    imgSrc:
      "https://pbs.twimg.com/profile_images/1467107930893787136/3QRBp3zn_400x400.jpg",
  },
  {
    name: "DefiAlpha",
    role: "Commuity",
    tiwtter: "IntrinsicDeFi",
    imgSrc:
      "https://pbs.twimg.com/profile_images/1470504588772007942/8rfa-Iab_400x400.jpg",
  },
];

export const Team = () => {
  return (
    <div style={{ padding: "100px 0" }} className="relative overflow-hidden">
      <div
        className="absolute h-full bg-[length:240px_240px] rotate-45"
        style={{
          backgroundImage: `url(${patternLight})`,
          top: "590px",
          left: "610px",
          width: "700px",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent to-[#17171F]"></div>
      </div>
      <div className="container mx-auto mb-14 relative">
        <h2 className="text-white text-5xl font-bold text-center mb-4">
          Our team
        </h2>
        <p className="text-gray-300 text-center">
          super coders and cross chain enthusiasts
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-4 gap-5 relative">
        {teamList.map((member, index) => {
          return <Person key={index} data={member} />;
        })}
      </div>
    </div>
  );
};

const Person = ({ data }) => {
  return (
    <div className="mb-5 flex flex-col items-center p-5 rounded-md">
      <p className="text-center font-medium text-white hover:underline">
        <a
          href={`https://twitter.com/${data.twitter}`}
          target="_blank"
          className="block relative"
        >
          {data.name}
        </a>
      </p>
      <p className="text-center text sm text-gray-400 lowercase">{data.role}</p>
      <img
        className="w-36 h-36 rounded-full mt-5 object-cover"
        src={data.imgSrc}
        alt={`${data.name}'s photo`}
      />
    </div>
  );
};
