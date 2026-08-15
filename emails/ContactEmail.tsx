interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactEmail({
  name,
  email,
  message,
}: ContactEmailProps) {
  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        padding: "40px 20px",
        fontFamily:
          "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "620px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          border: "1px solid #e5e5e5",
        }}
      >
        <div
          style={{
            padding: "28px 32px",
            borderBottom:
              "1px solid #e5e5e5",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#777777",
            }}
          >
            Portfolio Contact
          </p>

          <h1
            style={{
              margin: "14px 0 0",
              fontSize: "26px",
              lineHeight: "1.2",
              fontWeight: 600,
              color: "#111111",
            }}
          >
            New message from your portfolio
          </h1>
        </div>

        <div
          style={{
            padding: "32px",
          }}
        >
          <div
            style={{
              marginBottom: "26px",
            }}
          >
            <p
              style={{
                margin: "0 0 7px",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#888888",
              }}
            >
              Name
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "15px",
                color: "#111111",
              }}
            >
              {name}
            </p>
          </div>

          <div
            style={{
              marginBottom: "30px",
            }}
          >
            <p
              style={{
                margin: "0 0 7px",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#888888",
              }}
            >
              Email
            </p>

            <a
              href={`mailto:${email}`}
              style={{
                fontSize: "15px",
                color: "#111111",
                textDecoration:
                  "underline",
              }}
            >
              {email}
            </a>
          </div>

          <div>
            <p
              style={{
                margin: "0 0 10px",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#888888",
              }}
            >
              Message
            </p>

            <div
              style={{
                padding: "20px",
                backgroundColor: "#f7f7f7",
                border:
                  "1px solid #eeeeee",
              }}
            >
              <p
                style={{
                  margin: 0,
                  whiteSpace: "pre-wrap",
                  fontSize: "14px",
                  lineHeight: "1.7",
                  color: "#333333",
                }}
              >
                {message}
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            padding: "20px 32px",
            borderTop:
              "1px solid #e5e5e5",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "11px",
              color: "#888888",
            }}
          >
            Reply directly to this email to
            respond to the sender.
          </p>
        </div>
      </div>
    </div>
  );
}