import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridThirdDemo() {
  return (
    (<BentoGrid className="">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
        //   icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2 h-[300px]"  : ""} />
      ))}
    </BentoGrid>)
  );
}
const Skeleton = () => (
  <div
    className="flex flex-1 w-full h-full h-[400px] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
    {
      title: "AGRA",
      description: (
          "The Digital Learning Unit is developing for AGRA animated videos for use in  training of farmers across Africa on good agronomic practices of different crops. The animations will be a mix of 2D and 3D animations,which will be produced primarily in English and then translated intolanguages spoken throughout Africa such as Kiswahili, French and Portuguese."
      ),
      header: <img src ='/img/AGRA.jpeg' className="object-stretch h-[110px]" />,
      className: "md:col-span-1",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "FIPS",
      description: (
        "The Digital Learning Unit was awarded another consultancy contract where we would develop animated instructional videos for use in educating farmers on good farming practices.The animations will also be used by people who train farmers such as FIPS staff, County Extension Officers and people selling inputs related to the technologies (service providers or agro-dealers)."
      ),
      header: <img src = '/img/FIPS.webp' className="object-stretch h-[110px]"/>,
      className: "md:col-span-1",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "GIZ",
      description: (
        "GIZ Nairobi Office awarded the Digital Learning Unit a consultancy contract to develop web-based tools for blended learning under the Access and Benefit Sharing (ABS) Capacity Development Initiative.The aim is to extend the current face-to-face course into a blended learning course, combining both online and offline phases."
      ),
      header: <img src ='/img/GIZ.jpeg' className="object-stretch h-[110px]" />,
      className: "md:col-span-1",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "IJM/ODPP",
      description: (
        "IJMK and ODPP sought to develop a Learning Management System (LMS) that can deliver interactive e-learning capabilities, assessment features, and intuitive analytics on the use of the platform.The goal of this project was to develop a web-based software platform that will provide an interactive online learning environment and automate the administration, organization, delivery, and reporting of knowledge content and learner outcomes and measurement for the Office of the Director of Public Prosecution."
      ),
      header: <img src='/img/IJM.jpeg' className="object-stretch h-[160px]" />,
      className: "md:col-span-2",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
  
    {
      title: "Kids Can Code",
      description: (
        "This project, in partnership with wiLearn 4 Life, aims to enhance education and skill development in remote and underserved areas. It provides digital libraries with Open Educational Resources (OER), ensuring adaptable, up-to-date content that aligns with local and professional needs. Free access to learning materials removes financial barriers, making education accessible to all."),
      header: <img src= '/img/kidscancode.webp' className="object-stretch h-[100px]" />,
      className: "md:col-span-1",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Master Card",
      description: (
        "The MasterCard Foundation partnered with @iLabAfrica to develop an interactive portal showcasing Africa’s EdTech ecosystem. The project focused on EdTech system development, including platform design and implementation, and content curation."),
      header: <img src ='/img/mastercard.png' className="object-stretch h-[120px]" />,
      className: "md:col-span-1",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "UNHRC",
      description: (
      "UNHCR sought to establish a web-based EMIS with the aim of providing transparent, accurate, quality, and accessible education data, information, and indicators for use by all stakeholders in support of greater transparency and coordination, and strengthened planning in education services, with a particular focus on maintaining individual student information"
   ),
      header: <img src ='/img/UNHCR.png' className="object-stretch h-[160px]" />,
      className: "md:col-span-1",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Suistainable and Affordable Access to Education for Refugees",
      description: (
      "Launched in June 2016 with UNHCR and WTK, the project provided online classes and in-person revisions in Kakuma. It established a computer lab and secured KASNEB exam center accreditation."),
      header: <img src = '/img/refugees.webp' className="object-stretch h-[120px]" />,
      className: "md:col-span-1",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Mobile Learning",
      description: (
      "This collaboration with Castalia Co. Ltd Japan. We carried out a pilot on a mobile learning platform created by Castalia at Strathmore University for MSc. MTI and MSc. ISS programme with content developed by @iLabAfrica."
   ),
      header: <img src = '/img/mobilelearning.webp' className="object-stretch h-[120px]" />,
      className: "md:col-span-1",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "ReadyToWork",
      description: (
    "@iLabAfrica Digital Learning, in partnership with Barclays Bank, trains youth in work, people, money, and entrepreneurial skills. The ReadyToWork initiative equips them for employment or self-employment. This helps bridge the gap between education and the workforce."),
      header: <img src = '/img/blended.avif' className="object-stretch h-[120px]" />,
      className: "md:col-span-1",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Capacity Building in ICTS",
      description: (
     "The team trained SOA lecturers on online teaching platforms and screen annotation tools for the Kakuma Refugees project. Twenty-four CPA students in Kakuma received training on online platforms and basic ICT skills. Strathmore University lecturers and @iLabAfrica staff were also trained in online teaching."),
      header: <img src = '/img/blendedlearning.jpg' className="object-stretch h-[120px]" />,
      className: "md:col-span-1",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Smart Learning Communities",
      description: (
      "The MasterCard Foundation and @iLabAfrica developed an interactive portal to share insights on Africa’s EdTech ecosystem. It offers up-to-date guidance on developing and implementing EdTech. The platform serves governments, organizations, entrepreneurs, and innovators."),
      header: <img src = '/img/blended.avif' className="object-stretch h-[120px]" />,
      className: "md:col-span-1",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];
  
