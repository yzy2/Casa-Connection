module.exports = {
  getProperties: (req, res) => {
    const db = req.app.get("db");
    db
      .getProperties([req.user.id])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => res.status(500).json(err));
  },

  addProperty: (req, res) => {
    const db = req.app.get("db");
    const {
      prop_name,
      street,
      city,
      state,
      zip,
      img,
      t_f_name,
      t_l_name,
      t_phone,
      t_email,
      emerg_contact_name,
      emerg_contact_phone
    } = req.body;
    db
      .addProperty([
        req.user.id,
        prop_name,
        street,
        city,
        state,
        zip,
        img,
        t_f_name,
        t_l_name,
        t_phone,
        t_email,
        emerg_contact_name,
        emerg_contact_phone
      ])
      .then(response => res.status(200).json(response))
      .catch(() => res.status(500).json());
  },

  getProperty: (req, res) => {
    const db = req.app.get("db");
    db
      .getProperty([req.params.id])
      .then(response => res.status(200).json(response))
      .catch(() => res.status(500).json());
  },

  addWorkOrder: (req, res) => {
    const db = req.app.get("db");
    const { type, memo } = req.body;
    const user = req.user.id;
    db
      .addWorkOrder([req.body.prop_id, type, memo, user])
      .then(response => res.status(200).json(response))
      .catch(() => res.status(500).json());
  },

  getContractors: (req, res) => {
    const db = req.app.get("db");
    db
      .getContractors([req.user.id])
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).json(err));
  },

  addContractor: (req, res) => {
    const db = req.app.get("db");
    const {
      prop_name,
      company_name,
      type,
      f_name,
      l_name,
      phone,
      email,
      street,
      city,
      state,
      zip
    } = req.body;
    db
      .addContractor([
        req.user.id,
        prop_name,
        company_name,
        type,
        f_name,
        l_name,
        phone,
        email,
        street,
        city,
        state,
        zip
      ])
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).json(err));
  },

  deleteContractor: (req, res) => {
    const db = req.app.get("db");
    db
      .deleteContractor([req.body.id])
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).json(err));
  },

  addExpenses: (req, res) => {
    const db = req.app.get("db");
    const {
      assessed_value,
      down_payment,
      monthly_mortgage,
      monthly_dues,
      monthly_taxes,
      monthly_insurance,
      monthly_utilities
    } = req.body;
    db
      .addExpenses([
        assessed_value,
        down_payment,
        monthly_mortgage,
        monthly_dues,
        monthly_taxes,
        monthly_insurance,
        monthly_utilities,
        req.body.id
      ])
      .then(response => res.status(200).json(response))
      .catch(() => res.status(500).json());
  },

  deleteProperty: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.body;
    db
      .deleteProperty(id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  },

  getWorkOrders: (req, res) => {
    const db = req.app.get("db");
    db
      .getWorkOrders([req.body.prop_id])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  },

  getExpensesById: (req, res) => {
    const db = req.app.get("db");
    db
      .getExpensesById([req.body.prop_id])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  },

  deleteWorkOrders: (req, res) => {
    const db = req.app.get("db");
    db
      .deleteWorkOrders([req.body.workorders_id])
      .then(response => res.status(200).json(response))
      .catch(() => res.status(500).json());
  },

  getTenant: (req, res) => {
    const db = req.app.get("db");
    db
      .getProperty(req.body.prop_id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(() => {
        res.status(500).json();
      });
  },

  editTenant: (req, res) => {
    const db = req.app.get("db");
    const {
      t_f_name,
      t_l_name,
      phone,
      email,
      emerg_contact_name,
      emerg_contact_phone,
      id
    } = req.body;
    db
      .editTenant(
        t_f_name,
        t_l_name,
        phone,
        email,
        emerg_contact_name,
        emerg_contact_phone,
        id
      )
      .then(response => {
        res.status(200).json(response);
      })
      .catch(() => {
        res.status(500).json();
      });
  },

  getAllWorkOrders: (req, res) => {
    const db = req.app.get("db");
    db
      .getAllWorkOrders(req.user.id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(() => {
        res.status(500).json();
      });
  },

  editExpenses: (req, res) => {
    const db = req.app.get("db");
    const {
      assessed_value,
      down_payment,
      monthly_mortgage,
      monthly_dues,
      monthly_taxes,
      monthly_insurance,
      monthly_utilities,
      rent,
      id
    } = req.body;
    db
      .editExpenses(
        assessed_value,
        down_payment,
        monthly_mortgage,
        monthly_dues,
        monthly_taxes,
        monthly_insurance,
        monthly_utilities,
        rent,
        id
      )
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        res.status(500).json();
      });
  },

  editContractor: (req, res) => {
    const db = req.app.get("db");
    const {
      f_name,
      l_name,
      phone,
      email,
      street,
      city,
      state,
      zip,
      id
    } = req.body;
    db
      .editContractor(
        f_name,
        l_name,
        phone,
        email,
        street,
        city,
        state,
        zip,
        id
      )
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  },

  deleteAllWOByProp: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.body;
    db
      .deleteAllWOByProp(id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  },

  deleteContractorsByProp: (req, res) => {
    const db = req.app.get("db");
    const { name } = req.body;
    db
      .deleteContractorsByProp(name)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
};
