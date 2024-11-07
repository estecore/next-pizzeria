export const VerificationUserTemplate = ({ code }: { code: string }) => {
  return (
    <div>
      <p>
        Confirmation code: <b className="font-bold text-lg">{code}</b>
      </p>

      <p>
        <a href={`http://localhost:3000/api/auth/verify?code=${code}`}>
          Verify registration
        </a>
      </p>
    </div>
  );
};
