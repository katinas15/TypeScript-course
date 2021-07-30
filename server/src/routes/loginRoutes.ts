import { Router, Request, Response, NextFunction } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session?.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send("Not permitted");
}

const router = Router();

router.get("/login", (req: Request, res: Response) => {
  res.send(
    `
        <form method="POST">
            <div>
                <label>Email</label>
                <input name="email" type="email"/>
            </div>
            <div>
                <label>Password</label>
                <input name="password" type="password"/>
            </div>
            <button type="submit">Submit</button>
        </form>
      `
  );
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === "hi@hi.com" && password === "password") {
    req.session = { loggedIn: true };
    res.redirect("/");
  } else {
    res.send("provide a valid email and passw");
  }
});

router.get("/", (req: Request, res: Response) => {
  if (req.session?.loggedIn) {
    res.send(
      `
        <div>
          <div>you are logged in</div>
          <a href="/logout">Logout</a>
        </div>
      `
    );
  } else {
    res.send(
      `
        <div>
          <div>you are not logged in</div>
          <a href="/login">Login</a>
        </div>
      `
    );
  }
});

router.get("/logout", (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect("/");
});

router.get("/protected", requireAuth, (req: Request, res: Response) => {
  res.send("Protected route");
});

export { router };
