export default function Sort() {
  return (
    <div>
      <div className="flex justify-end mb-4">
        <label className="text-gray-700 text-sm font-bold mr-2" htmlFor="sort">
          排序方式
        </label>
        <select
          className="border-2 border-gray-300 rounded-md text-gray-700 text-sm font-bold mr-2"
          name="sort"
          id="sort"
        >
          <option value="timeDes">新>舊(時間)</option>
          <option value="timeAsc">舊>新(時間)</option>
          <option value="riskDes">高>低(危險度)</option>
          <option value="riskAsc">低>高(危險度)</option>
        </select>
      </div>
    </div>
  );
}
