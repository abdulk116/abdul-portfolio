"use client";

import {
  FormEvent,
  useState,
} from "react";

import styles from "./ContactForm.module.scss";

type Status =
  | "idle"
  | "sending"
  | "success"
  | "error";

export default function ContactForm() {
  const [status, setStatus] =
    useState<Status>("idle");

  const [errorMessage, setErrorMessage] =
    useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setStatus("sending");
    setErrorMessage("");

    const form =
      event.currentTarget;

    const formData =
      new FormData(form);

    const data = {
      name: String(
        formData.get("name") ?? ""
      ),

      email: String(
        formData.get("email") ?? ""
      ),

      message: String(
        formData.get("message") ?? ""
      ),

      website: String(
        formData.get("website") ?? ""
      ),
    };

    try {
      const response =
        await fetch("/api/contact", {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(data),
        });

      const result =
        await response.json();

      if (!response.ok) {
        throw new Error(
          result.message ||
          "Unable to send your message."
        );
      }

      setStatus("success");

      form.reset();
    } catch (error) {
      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    }
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          <div>
            <span
              className={styles.eyebrow}
            >
              Message
            </span>

            <h2>
              Have an opportunity
              <br />
              worth discussing?
            </h2>

            <p>
              Send me a message and I&apos;ll
              get back to you as soon as
              possible.
            </p>
          </div>

          <form
            className={styles.form}
            onSubmit={handleSubmit}
          >
            <label>
              Name

              <input
                type="text"
                name="name"
                placeholder="Your name"
                autoComplete="name"
                required
                minLength={2}
                maxLength={100}
              />
            </label>

            <label>
              Email

              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                maxLength={200}
              />
            </label>

            <label>
              Message

              <textarea
                name="message"
                placeholder="Tell me about the opportunity..."
                rows={7}
                required
                minLength={10}
                maxLength={5000}
              />
            </label>

            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className={styles.honeypot}
            />

            <button
              type="submit"
              disabled={
                status === "sending"
              }
            >
              {status === "sending"
                ? "Sending..."
                : "Send message"}
            </button>

            {status === "success" && (
              <p
                className={styles.success}
                role="status"
              >
                Message sent successfully.
                <br />
                Thanks for reaching out — I&apos;ll get
                back to you soon.
              </p>
            )}

            {status === "error" && (
              <p
                className={styles.error}
                role="alert"
              >
                {errorMessage ||
                  "Something went wrong. Please try again."}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}