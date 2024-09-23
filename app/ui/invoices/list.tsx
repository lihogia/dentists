import InvoicesTableComponent from "./table";
import { fetchFilteredInvoices } from "@/app/lib/data/queriesPrisma";

export default async function InvoicesList(
{ query, currentPage }: 
{
    query: string;
    currentPage: number;
}) {

    const invoices = await fetchFilteredInvoices(query, currentPage);

    return (
        <InvoicesTableComponent invoices={invoices}/>
    );
}