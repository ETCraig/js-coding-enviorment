import { useActions } from "../../hooks/use-actions";
import "./add-cell.css";

interface AddCellprops {
  prevCellId: string | null;
  forceVisible?: boolean;
}

const AddCell: React.FC<AddCellprops> = ({ prevCellId, forceVisible }) => {
  const { insertCellAfter } = useActions();

  return (
    <div className={`add-cell ${forceVisible && "visible"}`}>
      <div className="add-buttons">
        <button
          className="button is-rounded is-primary is small"
          onClick={() => insertCellAfter(prevCellId, "code")}
        >
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
          <span>Code</span>
        </button>
        <button
          className="button is-rounded is-primary is small"
          onClick={() => insertCellAfter(prevCellId, "markdown")}
        >
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
          <span>Markdown</span>
        </button>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default AddCell;
