import { Col } from "react-bootstrap";

interface EmployeeMetricProps {
  title: string;
  value: string;
  subtitle?: string;
  success?: boolean;
  warning?: boolean;
}

const EmployeeMetric: React.FC<EmployeeMetricProps> = ({
  title,
  value,
  subtitle,
  success,
  warning,
}) => {
    return (
        <Col xs={6}>

        <div
            className={`employee-metric ${
            success ? "success" : ""
            } ${warning ? "warning" : ""}`}
        >

            <small>{title}</small>

            <h5>{value}</h5>

            {subtitle && <span>{subtitle}</span>}

        </div>

        </Col>
    );
};

export default EmployeeMetric;