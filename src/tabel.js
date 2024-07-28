
function tabel(){
  return (
    <div>
      <tabel>
      <baris
        isi1="judul1"
        isi2="judul2"
        isi3="judul3"
      />
      </tabel>


    </div>
  );
}

function baris(props){
  return(
    <tr>
      <cell isi={props.isi1} />
      <cell isi={props.isi2} />
      <cell isi={props.isi3} />
    </tr>
  )
}

function cell(props) {
  return (
    <td>{props.isi}</td>
  );
}
export default tabel;