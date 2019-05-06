using Microsoft.EntityFrameworkCore.Migrations;

namespace HybridDataAccess.Migrations
{
    public partial class fiximgaeint : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Image",
                table: "NailPolishes",
                nullable: true,
                oldClrType: typeof(int));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Image",
                table: "NailPolishes",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
