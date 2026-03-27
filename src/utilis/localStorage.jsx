const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",

    taskNumbers: { active: 2, newTask: 1, completed: 3, failed: 0 },

    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare Sales Report",
        taskDate: "2026-03-25",
        category: "Reports",
        description: "Prepare monthly sales report"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client Meeting",
        taskDate: "2026-03-26",
        category: "Meeting",
        description: "Meeting with new client"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update CRM",
        taskDate: "2026-03-27",
        category: "Data",
        description: "Update customer records"
      }
    ]
  },

  {
    id: 2,
    firstName: "Vivaan",
    email: "employee2@example.com",
    password: "123",

    taskNumbers: { active: 1, newTask: 2, completed: 1, failed: 1 },

    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Website Testing",
        taskDate: "2026-03-25",
        category: "QA",
        description: "Test new features"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Bug Fix",
        taskDate: "2026-03-26",
        category: "Development",
        description: "Fix login bug"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Deploy Update",
        taskDate: "2026-03-20",
        category: "Deployment",
        description: "Deploy version 2.1"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Payment Integration",
        taskDate: "2026-03-18",
        category: "Backend",
        description: "Integration failed"
      }
    ]
  },

  {
    id: 3,
    firstName: "Aditya",
    email: "employee3@example.com",
    password: "123",

    taskNumbers: { active: 3, newTask: 0, completed: 2, failed: 1 },

    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Design Banner",
        taskDate: "2026-03-25",
        category: "Design",
        description: "Create promotional banner"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Social Media Post",
        taskDate: "2026-03-26",
        category: "Marketing",
        description: "Schedule posts"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Logo Update",
        taskDate: "2026-03-20",
        category: "Design",
        description: "Updated company logo"
      }
    ]
  },

  {
    id: 4,
    firstName: "Krishna",
    email: "employee4@example.com",
    password: "123",

    taskNumbers: { active: 0, newTask: 3, completed: 1, failed: 2 },

    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Inventory Check",
        taskDate: "2026-03-26",
        category: "Operations",
        description: "Check stock levels"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Vendor Call",
        taskDate: "2026-03-27",
        category: "Operations",
        description: "Discuss new supply"
      }
    ]
  },

  {
    id: 5,
    firstName: "Ishaan",
    email: "employee5@example.com",
    password: "123",

    taskNumbers: { active: 2, newTask: 1, completed: 0, failed: 3 },

    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Server Monitoring",
        taskDate: "2026-03-25",
        category: "IT",
        description: "Monitor server load"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Backup Setup",
        taskDate: "2026-03-28",
        category: "IT",
        description: "Setup daily backups"
      }
    ]
  }
]

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
]

// ===== SET LOCAL STORAGE =====

export const setLocalStorage = () => {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees))
  }

  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin))
  }
}

// ===== GET LOCAL STORAGE =====

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"))
  const admin = JSON.parse(localStorage.getItem("admin"))

  return { employees, admin }
}