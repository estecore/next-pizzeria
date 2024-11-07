export const VerificationUserTemplate = ({ code }: { code: string }) => {
  return (
    <div>
      <p>
        Confirmation code: <b className="font-bold text-lg">{code}</b>
      </p>

      <p>
        <a
          href={`https://next-pizzeria.vercel.app/api/auth/verify?code=${code}`}
        >
          Verify registration
        </a>
      </p>
    </div>
  );
};
