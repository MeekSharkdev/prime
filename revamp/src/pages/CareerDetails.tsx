
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
interface JobPosition {
  title: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
  companyDetails: {
    email: string;
    address: string;
    phone: string;
  };
}
const jobPositions: JobPosition[] = [
  {
    title: "Junior Web Developer",
    location: "Quezon City",
    type: "Full-time",
    experience: "0–2 years",
    description:
      "Define opportunities to create tangible business value for the client by leading current state assessments and identifying high-level customer requirements, defining the business solutions and structures needed to realize these opportunities, and developing business cases to achieve the vision. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus nisl pellentesque purus congue, ac posuere orci vulputate. Proin id velit efficitur, condimentum nibh sed, vulputate tortor. Suspendisse efficitur euismod nunc ultricies varius. Vestibulum iaculis scelerisque sapien, a pretium mi porta quis. Maecenas sed nisl auctor metus luctus pulvinar et id arcu. In turpis leo, posuere sit amet condimentum a, tincidunt ac risus. Ut ac tincidunt velit. Sed tempor dignissim lorem a tincidunt. Morbi maximus ac purus et laoreet. Pellentesque aliquam placerat porta. In eu sem lectus. Duis dictum augue elit, in condimentum velit lacinia eu.",
    responsibilities: [
      "Define opportunities to create tangible business value for the client by",
      "Leading current state assessments and identifying high-level customer requirements.",
      "Define business solutions and structures needed to realize these opportunities.",
      "Develop business cases to achieve the vision.",
    ],
    qualifications: [
      "Relevant degree or experience in web development or IT-related fields.",
      "Strong understanding of HTML, CSS, JavaScript, and modern frameworks.",
    ],
    benefits: [
      "Health and wellness benefits.",
      "Career development support and training programs.",
    ],
    companyDetails: {
      email: "careers@primephilippines.com",
      address:
        "3F IT Center, Ben-Lor Building, Quezon Ave, Diliman, Quezon City, 1103 Metro Manila",
      phone: "0987-654-3210",
    },
  },
];

const JobDescription = ({ job }: { job: JobPosition }) => (
  <section key={job.title} className="space-y-15">
    <h2 className="text-4xl font-semibold mb-2">{job.title}</h2>
    <div className="flex flex-wrap gap-4 mb-4">
      <span className="bg-PRIMEblue text-white px-4 py-1 rounded-full text-sm">{job.location}</span>
      <span className="bg-PRIMEblue text-white px-4 py-1 rounded-full text-sm">{job.type}</span>
      <span className="bg-PRIMEblue text-white px-4 py-1 rounded-full text-sm">Experience: {job.experience}</span>
    </div>
    <div className="border-b"></div>
    <div className="mt-4">
      <h2 className="text-3xl font-semibold mb-2">Job Description</h2>
      <ul className="list-disc pl-8 space-y-2 text-gray-800">
          <li> shtuhtiuhqwiuthqwhtuqwhiut Define opportunities to create tangible business value for the client by leading current state assessments and identifying high level customer requirements, defining the business solutions and structures needed to realize these opportunities, and developing business case to achieve the vision. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus nisl pellentesque purus congue, ac posuere orci vulputate. Proin id velit efficitur, condimentum nibh sed, vulputate tortor. Suspendisse efficitur euismod nunc ultricies varius. Vestibulum iaculis scelerisque sapien, a pretium mi porta quis. Maecenas sed nisl auctor metus luctus pulvinar et id arcu. In turpis leo, posuere sit amet condimentum a, tincidunt ac risus. Ut ac tincidunt velit. Sed tempor dignissim lorem a tincidunt. Morbi maximus ac purus et laoreet
            . Pellentesque aliquam placerat porta. In eu sem lectus. Duis dictum augue elit, in condimentum velit lacinia eu. </li>
      </ul>
    </div>
    <div className="mt-4">
      <h2 className="text-3xl font-semibold mb-2">Responsibilities</h2>
      <ul className="list-disc pl-13 space-y-2 text-gray-800">
        {job.responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </div>
    <div className="mt-4">
      <h2 className="text-3xl font-semibold mb-2">Qualifications</h2>
      <ul className="list-disc pl-13 space-y-2 text-gray-800">
        {job.qualifications.map((qual, index) => (
          <li key={index}>{qual}</li>
        ))}
      </ul>
    </div>
    <div className="mt-4">
      <h2 className="text-3xl font-semibold mb-2">Benefits</h2>
      <ul className="list-disc pl-13 space-y-2 text-gray-800">
        {job.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </div>
    <div className="mt-4">
      <h2 className="text-3xl font-semibold mb-2">Company Details</h2>
      <p className="text-gray-800">
        <strong>Send your application here:</strong>{" "}
        <a href={`mailto:${job.companyDetails.email}`} className="text-PRIMEblue underline">
          {job.companyDetails.email}
        </a>
      </p>
      <p>
        <strong>Company Address:</strong> {job.companyDetails.address}
      </p>
      <p>
        <strong>Contact No:</strong> {job.companyDetails.phone}
      </p>
    </div>
  </section>
);
export default function CareerDetailsPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />
      {/* Banner */}
      <section className="relative h-[250px] bg-[url('/Careers/Careers.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-PRIMEblue/70" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex items-center justify-center"
        >
        </motion.div>
      </section>
      {/* Content */}
      <div className="max-w-screen-lg mx-auto p-10 space-y-20">
        {jobPositions.map((job) => (
          <JobDescription job={job} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
