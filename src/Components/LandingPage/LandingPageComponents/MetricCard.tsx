interface MetricCardProps {
  title: string;
  value: string;
  subtitle: string;
  positive?: boolean;
  highlight?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  subtitle,
  positive,
  highlight,
}) => {
  return (
    <div className={`metric-card ${highlight ? "highlight" : ""}`}>
      <small>{title}</small>
        <h4>{value}</h4>
        <span className={positive ? "positive-text" : ""}>
          {subtitle}
        </span>
    </div>
  );
};

export default MetricCard;