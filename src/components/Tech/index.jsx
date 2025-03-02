const Tech = ({ isHighLight, data }) => {
          return (
                    <div className="flex gap-4 text-sm">
                              {
                                        data.map((e, i) => (
                                                  <div key={`${e}-tech-${i}`} className={`bg-primaryTitle px-2 py-1 rounded-md text-gray-200 ${isHighLight ? "hover:bg-primaryShape" : ""}`}>{e}</div>

                                        ))
                              }
                    </div>
          )
}

export default Tech;