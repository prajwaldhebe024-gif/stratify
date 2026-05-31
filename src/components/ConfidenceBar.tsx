type Props = {
  value: number;
};

function ConfidenceBar({
  value,
}: Props) {
  return (
    <div className="mt-3">

      <div className="flex justify-between text-sm">

        <span>Confidence</span>

        <span>{value}%</span>

      </div>

      <div
        className="
          h-2
          bg-slate-800
          rounded-full
          mt-2
        "
      >
        <div
          className="
            h-2
            rounded-full
            bg-blue-500
          "
          style={{
            width: `${value}%`,
          }}
        />
      </div>

    </div>
  );
}

export default ConfidenceBar;