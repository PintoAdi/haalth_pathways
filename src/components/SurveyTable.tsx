
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { SurveyResponse } from '../types/survey';

interface SurveyTableProps {
  data: SurveyResponse[];
}

export const SurveyTable = ({ data }: SurveyTableProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter(response =>
    response.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    response.mobile.includes(searchTerm) ||
    response.aadhar.includes(searchTerm)
  );

  const getPreferenceBadge = (response: SurveyResponse) => {
    if (response.modernHealthcare) {
      return <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 rounded-full">Modern Healthcare</Badge>;
    }
    if (response.traditionalHealthcare) {
      return <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0 rounded-full">Traditional Healthcare</Badge>;
    }
    if (response.dependsOnSituation) {
      return <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0 rounded-full">Depends on Situation</Badge>;
    }
    return null;
  };

  return (
    <Card className="backdrop-blur-xl bg-white/70 border-0 shadow-2xl rounded-3xl overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-gray-50/50 to-slate-50/50 pb-6">
        <CardTitle className="text-2xl font-semibold text-gray-900 mb-4">Survey Responses</CardTitle>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            placeholder="Search by name, mobile, or Aadhar number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 h-12 bg-white/80 backdrop-blur-sm border-0 rounded-2xl shadow-lg focus:shadow-xl transition-all duration-300 text-gray-700"
          />
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-gray-100 hover:bg-transparent">
                <TableHead className="w-[60px] text-gray-600 font-semibold">S.No</TableHead>
                <TableHead className="text-gray-600 font-semibold">Name</TableHead>
                <TableHead className="text-gray-600 font-semibold">Address</TableHead>
                <TableHead className="text-gray-600 font-semibold">Mobile</TableHead>
                <TableHead className="text-gray-600 font-semibold">Aadhar Number</TableHead>
                <TableHead className="text-gray-600 font-semibold">Healthcare Preference</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((response) => (
                <TableRow key={response.id} className="border-b border-gray-50 hover:bg-white/50 transition-colors duration-200">
                  <TableCell className="font-medium text-gray-700">{response.id}</TableCell>
                  <TableCell className="font-medium text-gray-900">{response.name}</TableCell>
                  <TableCell className="text-gray-700">{response.address}</TableCell>
                  <TableCell className="text-gray-700 font-mono">{response.mobile}</TableCell>
                  <TableCell className="font-mono text-sm text-gray-600">{response.aadhar}</TableCell>
                  <TableCell>{getPreferenceBadge(response)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {filteredData.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-lg">No results found for "{searchTerm}"</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
