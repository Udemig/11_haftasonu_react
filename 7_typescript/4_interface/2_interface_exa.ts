interface IAdress {
  city: string;
  street: string;
  zipcode: number;
}

interface IEducation {
  school: string;
  gradutionYear: number;
}

interface IJob {
  company: string;
  startDate: Date;
  title: string;
}

interface IPerson {
  id: number;
  firstName: string;
  lastName: string;
  age: number;

  adress: IAdress;
  education: IEducation;
  job: IJob[];
}

const faruk: IPerson = {
  id: 34534,
  firstName: "Faruk",
  lastName: "Kaya",
  age: 35,

  adress: {
    city: "İstanbul",
    street: "4567sk.",
    zipcode: 34410,
  },

  education: {
    school: "ODTÜ",
    gradutionYear: 2020,
  },

  job: [
    {
      company: "X Şirketi",
      startDate: new Date(),
      title: "Frontend",
    },
  ],
};
