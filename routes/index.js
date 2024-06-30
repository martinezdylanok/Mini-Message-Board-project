import express from "express";
const router = express.Router();

const messages = [
   {
      text: "Hi there!",
      user: "Amando",
      added: new Date(),
   },
   {
      text: "Hello World!",
      user: "Charles",
      added: new Date(),
   },
];

/* GET home page. */
router.get("/", (req, res, next) => {
   res.render("index", { title: "Mini Message Board", messages: messages });
});

router.get("/new", (req, res, next) => {
   res.render("form", { title: "Add a new message" });
});

router.post("/new", (req, res, next) => {
   const message = {
      text: req.body.text,
      user: req.body.user,
      added: new Date(),
   };
   messages.push(message);
   res.redirect("/");
});

export default router;
