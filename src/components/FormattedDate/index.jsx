
const FormattedDate = ({ isHighLight, children }) => {
          return (
                    <div>
                              <span className={`font-medium ${isHighLight ? "hover:text-primaryShape" : ""}`}>
                                        {children}
                              </span>
                    </div>
          )
}

export default FormattedDate;