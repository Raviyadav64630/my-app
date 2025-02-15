export const interestToRoles = {
    "Technology & Innovation": ["Software Developer", "Data Analyst", "IT Support"],
    "Creativity & Design": ["UX Designer", "Graphic Designer", "Product Designer"],
    "People & Communication": ["Marketing Specialist", "Sales Executive", "HR Manager"],
    "Business & Finance": ["Entrepreneur", "Financial Analyst", "Business Consultant"],
    "Engineering & Mechanics": ["Mechanical Engineer", "Civil Engineer", "Electrical Technician"],
    "Science & Research": ["Data Scientist", "Researcher", "Biotech Engineer"],
  };
  
  export const allRoles = Object.values(interestToRoles).flat();
  export const rolesOptions = allRoles.map((role) => ({ value: role, label: role }));
  